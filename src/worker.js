// Tar imot skjemaene på h-u-b.no og lagrer dem i D1-databasen hub-skjema.
// Alle andre forespørsler går til de statiske filene i public/.

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const EPOST = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const tekst = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const liste = (v, max) => (Array.isArray(v) ? v.filter(x => typeof x === 'string').slice(0, 20).map(x => x.slice(0, 40)).join(',') : '').slice(0, max);

async function venteliste(body, db) {
  const epost = tekst(body.email, 120).toLowerCase();
  if (!EPOST.test(epost)) return json({ ok: false, error: 'ugyldig_epost' }, 400);
  if (body.consent !== true) return json({ ok: false, error: 'mangler_samtykke' }, 400);
  // Melder noen seg på igjen, oppdateres raden i stedet for å lage en ny.
  await db
    .prepare(
      `INSERT INTO venteliste (epost, fornavn, mobil, interesser, lag, grunnleggerkort, kilde)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
       ON CONFLICT(epost) DO UPDATE SET
         fornavn = COALESCE(NULLIF(excluded.fornavn, ''), fornavn),
         mobil = COALESCE(NULLIF(excluded.mobil, ''), mobil),
         interesser = COALESCE(NULLIF(excluded.interesser, ''), interesser),
         lag = COALESCE(NULLIF(excluded.lag, ''), lag),
         grunnleggerkort = MAX(grunnleggerkort, excluded.grunnleggerkort)`
    )
    .bind(epost, tekst(body.name, 60), tekst(body.phone, 20), liste(body.interests, 200), tekst(body.team, 60), body.founder === true ? 1 : 0, tekst(body.source, 80))
    .run();
  return json({ ok: true });
}

async function undersokelse(body, db) {
  const svar = body.answers && typeof body.answers === 'object' ? JSON.stringify(body.answers) : '';
  if (!svar || svar.length > 10000) return json({ ok: false, error: 'ugyldige_svar' }, 400);
  await db.prepare('INSERT INTO undersokelse (svar, kilde) VALUES (?1, ?2)').bind(svar, tekst(body.source, 80)).run();
  return json({ ok: true });
}

async function samarbeid(body, db) {
  const epost = tekst(body.email, 120);
  if (!EPOST.test(epost)) return json({ ok: false, error: 'ugyldig_epost' }, 400);
  const navn = tekst(body.name, 80), melding = tekst(body.message, 2000);
  if (!navn || !melding) return json({ ok: false, error: 'mangler_felt' }, 400);
  await db
    .prepare('INSERT INTO samarbeid (type, navn, firma, epost, mobil, melding) VALUES (?1, ?2, ?3, ?4, ?5, ?6)')
    .bind(tekst(body.type, 30), navn, tekst(body.company, 80), epost, tekst(body.phone, 20), melding)
    .run();
  return json({ ok: true });
}

const SKJEMA = { 'venteliste.php': venteliste, 'undersokelse.php': undersokelse, 'samarbeid.php': samarbeid };
const TABELLER = ['venteliste', 'undersokelse', 'samarbeid'];

const csvCelle = v => {
  const s = v == null ? '' : String(v);
  return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

// GET /api/eksport?tabell=venteliste&nokkel=... gir en CSV-fil. Krever hemmeligheten EKSPORT_NOKKEL.
async function eksport(url, env) {
  const nokkel = env.EKSPORT_NOKKEL;
  if (!nokkel || url.searchParams.get('nokkel') !== nokkel) return new Response('Ikke funnet', { status: 404 });
  const tabell = url.searchParams.get('tabell') || 'venteliste';
  if (!TABELLER.includes(tabell)) return new Response('Ukjent tabell', { status: 400 });
  const { results } = await env.DB.prepare(`SELECT * FROM ${tabell} ORDER BY id`).all();
  const kolonner = results.length ? Object.keys(results[0]) : [];
  const csv = [kolonner.join(','), ...results.map(r => kolonner.map(k => csvCelle(r[k])).join(','))].join('\n');
  return new Response('﻿' + csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="hub-${tabell}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const navn = url.pathname.split('/api/')[1];

    if (url.pathname === '/api/eksport' && request.method === 'GET') return eksport(url, env);

    if (navn && SKJEMA[navn]) {
      if (request.method !== 'POST') return json({ ok: false, error: 'bare_post' }, 405);
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ ok: false, error: 'ugyldig_json' }, 400);
      }
      if (!body || typeof body !== 'object') return json({ ok: false, error: 'ugyldig_json' }, 400);
      // Honningkrukke: roboter fyller ut det skjulte feltet. De får et ja, men ingenting lagres.
      if (tekst(body.website, 200)) return json({ ok: true });
      try {
        return await SKJEMA[navn](body, env.DB);
      } catch (e) {
        console.error(navn, e);
        return json({ ok: false, error: 'serverfeil' }, 500);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
