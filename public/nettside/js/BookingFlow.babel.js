/* HUB – bestillingsflyt. Ett ark (helskjerm på mobil, sidepanel på desktop) med tre steg:
   0 Hva og når · 1 Antall og rom · 2 Bekreft og betal · 3 Booket.
   Åpnes fra hvor som helst med window.hubBook({ kind, match, room, day }). */

const hubClock = mins => { const m = ((mins % 1440) + 1440) % 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };
const hubDur = m => { const h = Math.floor(m / 60), r = m % 60; return (h ? h + ' t' : '') + (h && r ? ' ' : '') + (r ? r + ' min' : ''); };
const hubHours = h => String(h).replace('.', ',') + ' t';
const HUB_DUR = { Fotball: 120, 'Håndball': 105, Motorsport: 120, Vintersport: 150, Tennis: 150, Darts: 240, Kampsport: 240, 'E-sport': 180, 'USA-sport': 195, 'Show og konkurranser': 150 };
const HUB_KINDS = [
  { k: 'sport', label: 'Kamp', icon: 'device-tv', sub: 'Sport og sendinger' },
  { k: 'gaming', label: 'Gaming', icon: 'game-controller', sub: 'Konsoll og PC' },
  { k: 'sim', label: 'Simracing', icon: 'gauge', sub: 'Rigger med ratt' },
  { k: 'custom', label: 'Egen tid', icon: 'movie', sub: 'Film og annet' },
];
const hubCap = r => parseInt(String(r.capacity).match(/\d+/)) || 1;
const hubDayNum = d => parseInt(d.match(/\d+/));
const hubDays = () => [...new Set(window.HUB_DATA.matches.map(m => m.day))].sort((a, b) => hubDayNum(a) - hubDayNum(b));
const hubMatchesOn = day => window.HUB_DATA.matches.filter(m => m.day === day).sort((a, b) => a.time.localeCompare(b.time));
const hubTitle = m => m.away ? `${m.home} – ${m.away}` : m.home;
const hubMatchDur = m => m.dur || HUB_DUR[m.sport] || 120;
const HUB_TIMES = Array.from({ length: 28 }, (_, i) => hubClock(600 + i * 30));

function hubFoodGroups() {
  const M = window.HUB_MENU;
  const out = [];
  ['Mat', 'Drikke', 'Snacks'].forEach(c => M[c].cols.flat().forEach(t => { const g = M[c].groups.find(x => x.title === t); if (g) out.push({ cat: c, title: t, items: g.items.map(([name, desc, price]) => ({ id: t + ':' + name, name, desc, price })) }); }));
  return out;
}

/* Små byggeklosser */
function HubChipRow({ children, label }) {
  const ref = React.useRef(null);
  React.useEffect(() => { const el = ref.current && ref.current.querySelector('[aria-pressed="true"]'); if (el) { const a = el.getBoundingClientRect(), b = ref.current.getBoundingClientRect(); ref.current.scrollLeft += Math.max(0, (a.left - b.left) - (b.width - a.width) / 2); } }, []);
  return <div ref={ref} role="group" aria-label={label} className="hub-noscroll" style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none', margin: '0 calc(-1 * var(--bk-pad))', padding: '2px var(--bk-pad)', scrollSnapType: 'x proximity' }}>{children}</div>;
}
function HubDayChip({ day, on, onClick, count }) {
  const [wd, ...rest] = day.split(' ');
  return <button type="button" onClick={onClick} aria-pressed={on} style={{ flex: 'none', scrollSnapAlign: 'start', cursor: 'pointer', width: 60, minHeight: 56, padding: '6px 0', border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-line)'}`, background: on ? 'var(--hub-pink)' : 'transparent', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)', textAlign: 'center' }}>
    <div style={{ fontSize: 12, fontWeight: 700, opacity: on ? 1 : 0.8 }}>{wd}</div>
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, lineHeight: 1.1 }}>{rest[0]}</div>
    {count != null && <div style={{ fontSize: 11, color: on ? 'var(--hub-cream)' : 'var(--hub-grey-400)' }}>{count} send.</div>}
  </button>;
}
function HubTimeChip({ t, on, onClick }) {
  return <button type="button" onClick={onClick} aria-pressed={on} style={{ flex: 'none', scrollSnapAlign: 'start', cursor: 'pointer', minWidth: 64, height: 44, border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-line)'}`, background: on ? 'var(--hub-pink)' : 'transparent', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15 }}>{t}</button>;
}
function HubSeg({ items, value, onChange, label }) {
  return <div role="radiogroup" aria-label={label} style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, border: '2px solid var(--hub-ink-line)' }}>
    {items.map(([v, l], i) => { const on = v === value;
      return <button key={v} type="button" role="radio" aria-checked={on} onClick={() => onChange(v)} style={{ cursor: 'pointer', minHeight: 44, border: 0, borderLeft: i ? '2px solid var(--hub-ink-line)' : 0, background: on ? 'var(--hub-cream)' : 'transparent', color: on ? 'var(--hub-ink)' : 'var(--hub-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>{l}</button>; })}
  </div>;
}
function HubLabel({ children, aside }) {
  return <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, margin: '0 0 10px' }}>
    <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.015em', color: 'var(--hub-cream)' }}>{children}</h3>
    {aside && <span style={{ fontSize: 13, color: 'var(--hub-grey-400)', whiteSpace: 'nowrap' }}>{aside}</span>}
  </div>;
}
function HubMatchRow({ m, on, onClick }) {
  const { Icon } = window.HUBDesignSystem_d87c4c;
  return <button type="button" onClick={onClick} aria-pressed={on} style={{ cursor: 'pointer', width: '100%', display: 'grid', gridTemplateColumns: '48px minmax(0,1fr) 18px', gap: 12, alignItems: 'center', minHeight: 56, padding: '8px 12px', textAlign: 'left', fontFamily: 'var(--font-body)', background: on ? 'var(--hub-ink-2)' : 'transparent', border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`, color: 'var(--hub-cream)' }}>
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, fontVariantNumeric: 'tabular-nums' }}>{m.time}</span>
    <span style={{ minWidth: 0 }}>
      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, lineHeight: 1.2, textWrap: 'balance' }}>{hubTitle(m)}</span>
      <span style={{ display: 'block', fontSize: 12, color: 'var(--hub-grey-400)', marginTop: 2 }}>{m.big && <b style={{ color: 'var(--hub-pink-light)', letterSpacing: '.06em', textTransform: 'uppercase', fontSize: 11 }}>Storkamp · </b>}{m.league} · ca. {hubDur(hubMatchDur(m))}</span>
    </span>
    <span aria-hidden="true" style={{ color: 'var(--hub-grey-400)', display: 'inline-flex' }}><Icon name="chevron-right" size={18} /></span>
  </button>;
}

function HubRoomRow({ r, on, onClick, price, perPerson, note, disabled, best, hours }) {
  const { Icon, Badge } = window.HUBDesignSystem_d87c4c;
  return <button type="button" onClick={disabled ? undefined : onClick} aria-pressed={on} aria-disabled={disabled} style={{ cursor: disabled ? 'default' : 'pointer', width: '100%', display: 'grid', gridTemplateColumns: '84px minmax(0,1fr) auto', gap: 12, alignItems: 'center', padding: 8, textAlign: 'left', fontFamily: 'var(--font-body)', background: on ? 'var(--hub-ink-2)' : 'var(--hub-ink)', border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`, color: 'var(--hub-cream)', opacity: disabled ? 0.55 : 1 }}>
    <span style={{ position: 'relative', width: 84, height: 63, background: r.image ? `url(${r.image}) center/cover var(--hub-ink-3)` : 'var(--hub-ink-3)' }}>
      {on && <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'rgba(208,66,106,.55)' }}><Icon name="check" size={26} color="var(--hub-cream)" /></span>}
    </span>
    <span style={{ minWidth: 0 }}>
      {best && !disabled && <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--hub-pink-light)', marginBottom: 2 }}>Passer best</span>}
      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>{r.name}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--hub-grey-300)', marginTop: 3 }}><Icon name="users" size={14} />{note || r.capacity}</span>
    </span>
    <span style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
      {disabled ? <Badge color="ink">{note && note.startsWith('Utsolgt') ? 'Utsolgt' : 'For lite'}</Badge> : <>
        <span style={{ display: 'block', fontWeight: 700, fontSize: 15 }}>{kr(price)}</span>
        <span style={{ display: 'block', fontSize: 12, color: 'var(--hub-grey-400)' }}>{kr(perPerson)} / pers.</span>
      </>}
    </span>
  </button>;
}

function HubFood({ food, setFood }) {
  const { Stepper, Tabs } = window.HUBDesignSystem_d87c4c;
  const groups = React.useMemo(hubFoodGroups, []);
  const [cat, setCat] = React.useState('Mat');
  const cnt = c => groups.filter(g => g.cat === c).reduce((s, g) => s + g.items.reduce((t, f) => t + (food[f.id] || 0), 0), 0);
  return <div>
    <Tabs tone="dark" items={['Mat', 'Drikke', 'Snacks'].map(c => ({ value: c, label: cnt(c) ? `${c} · ${cnt(c)}` : c }))} value={cat} onChange={setCat} />
    {groups.filter(g => g.cat === cat).map(g => <div key={g.title} style={{ marginTop: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--hub-pink-light)', marginBottom: 2 }}>{g.title}</div>
      {g.items.map(f => <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: '1px solid var(--hub-ink-3)' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--hub-cream)' }}>{f.name}</div>
          <div style={{ fontSize: 12, color: 'var(--hub-grey-400)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{kr(f.price)} · {f.desc}</div>
        </div>
        <Stepper size="sm" tone="dark" value={food[f.id] || 0} min={0} max={20} onChange={v => setFood({ ...food, [f.id]: v })} />
      </div>)}
    </div>)}
  </div>;
}

function BookingSheet({ preset, onClose }) {
  const DS = window.HUBDesignSystem_d87c4c;
  const { Button, Stepper, Switch, Input, Icon, IconButton, LetterBox } = DS;
  const D = window.HUB_DATA;
  const days = React.useMemo(hubDays, []);
  const presetMatch = preset.match && D.matches.find(m => m.id === preset.match);
  const presetRoom = preset.room && D.rooms.find(r => r.id === preset.room);
  const initKind = presetMatch ? 'sport' : presetRoom ? (presetRoom.type || 'sport') : (preset.kind || 'sport');
  const [kind, setKind] = React.useState(initKind);
  const [day, setDay] = React.useState(presetMatch ? presetMatch.day : (preset.day || days[0]));
  const [mid, setMid] = React.useState(presetMatch ? presetMatch.id : null);
  const [showAll, setShowAll] = React.useState(false);
  const [time, setTime] = React.useState('18:00');
  const [hours, setHours] = React.useState(2);
  const [people, setPeople] = React.useState(() => { const d = initKind === 'sim' ? 2 : initKind === 'gaming' ? 4 : 6; return presetRoom && presetRoom.type !== 'sim' ? Math.min(d, hubCap(presetRoom)) : d; });
  const [roomId, setRoomId] = React.useState(presetRoom ? presetRoom.id : null);
  const [before, setBefore] = React.useState(30);
  const [after, setAfter] = React.useState(0);
  const [whole, setWhole] = React.useState(false);
  const [showUnavail, setShowUnavail] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [split, setSplit] = React.useState(true);
  const [pay, setPay] = React.useState('vipps');
  const [food, setFood] = React.useState({});
  const [foodOpen, setFoodOpen] = React.useState(false);
  const [tried, setTried] = React.useState(false);
  const [step, setStep] = React.useState(presetMatch ? 1 : 0);
  const [busy, setBusy] = React.useState(false);
  const bodyRef = React.useRef(null);
  const sheetRef = React.useRef(null);

  const isSport = kind === 'sport';
  const sim = kind === 'sim';
  const match = isSport && mid ? D.matches.find(m => m.id === mid) : null;
  const dayList = hubMatchesOn(day);
  const featured = showAll ? dayList : [...dayList.filter(m => m.big), ...dayList.filter(m => !m.big)].slice(0, 6).sort((a, b) => a.time.localeCompare(b.time));

  // Tid
  let start, end;
  if (match) { const [h, m] = match.time.split(':').map(Number); start = h * 60 + m - before; end = h * 60 + m + hubMatchDur(match) + after; }
  else { const [h, m] = time.split(':').map(Number); start = h * 60 + m; end = start + hours * 60; }
  const dur = Math.ceil((end - start) / 30) / 2;

  // Rom
  const roomType = isSport || kind === 'custom' ? undefined : kind;
  const pool = D.rooms.filter(r => r.type === roomType);
  const soldOut = r => match && (r.soldOut || []).includes(match.id);
  const fits = r => sim ? true : hubCap(r) >= people;
  const avail = pool.filter(r => fits(r) && !soldOut(r)).sort((a, b) => hubCap(a) - hubCap(b) || a.perHour - b.perHour);
  const unavail = pool.filter(r => !avail.includes(r));
  const priceOf = r => Math.round(sim ? (whole ? r.wholeRoom : r.perHour * people) * dur : r.perHour * dur);
  const room = avail.find(r => r.id === roomId) || null;
  React.useEffect(() => { if (!avail.find(r => r.id === roomId)) setRoomId(avail[0] ? avail[0].id : null); }, [people, kind, mid, whole, step]);

  // Pris
  const foodItems = React.useMemo(() => hubFoodGroups().flatMap(g => g.items), []);
  const foodN = foodItems.reduce((s, f) => s + (food[f.id] || 0), 0);
  const foodSum = foodItems.reduce((s, f) => s + f.price * (food[f.id] || 0), 0);
  const roomSum = room ? priceOf(room) : 0;
  const total = roomSum + foodSum;
  const perPerson = Math.ceil(total / Math.max(1, people));

  const whatLine = match ? hubTitle(match) : kind === 'gaming' ? 'Gaming' : sim ? 'Simracing' : 'Egen tid';
  const whenLine = `${day} · ${hubClock(start)}–${hubClock(end)}`;
  const phoneOk = /^[49]\d{7}$/.test(phone.replace(/\s/g, ''));
  const nameOk = name.trim().length > 1;

  const go = s => { setStep(s); setTried(false); requestAnimationFrame(() => { if (bodyRef.current) bodyRef.current.scrollTop = 0; }); };
  const stepRef = React.useRef(step); stepRef.current = step;
  const closingRef = React.useRef(false);

  // Lås scrolling, Esc, og tilbakeknapp i nettleseren
  React.useEffect(() => {
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    history.pushState({ hubBook: 1 }, '');
    const onPop = () => { if (closingRef.current) { onClose(true); return; } if (stepRef.current > 0 && stepRef.current < 3) { setStep(s => s - 1); history.pushState({ hubBook: 1 }, ''); } else onClose(true); };
    const onKey = e => { if (e.key === 'Escape') close(); };
    window.addEventListener('popstate', onPop); window.addEventListener('keydown', onKey);
    setTimeout(() => { if (sheetRef.current) sheetRef.current.focus({ preventScroll: true }); }, 50);
    return () => { document.body.style.overflow = prev; window.removeEventListener('popstate', onPop); window.removeEventListener('keydown', onKey); };
  }, []);
  const close = () => { closingRef.current = true; if (history.state && history.state.hubBook) history.back(); else onClose(true); };
  const back = () => step > 0 && step < 3 ? go(step - 1) : close();

  const pickKind = k => { setKind(k); setRoomId(null); if (k !== 'sport') setMid(null); setPeople(k === 'sim' ? 2 : k === 'gaming' ? Math.min(people, 6) : people); };
  const pickMatch = m => { setMid(m.id); go(1); };
  const book = () => {
    if (!nameOk || !phoneOk) { setTried(true); return; }
    setBusy(true); setTimeout(() => { setBusy(false); go(3); }, 900);
  };

  // Bunnlinje
  let cta, ctaOn = true, info;
  if (step === 0) { cta = 'Velg rom'; ctaOn = !isSport || !!match; info = isSport ? (match ? hubTitle(match) : 'Velg en sending') : `${whatLine} · ${hubClock(start)}–${hubClock(end)}`; }
  if (step === 1) { cta = room ? 'Fortsett' : 'Velg et rom'; ctaOn = !!room; }
  if (step === 2) { cta = busy ? 'Venter på Vipps …' : pay === 'vipps' ? 'Betal med Vipps' : 'Betal med kort'; }
  const onCta = () => step === 0 ? go(1) : step === 1 ? go(2) : step === 2 ? book() : close();
  const titles = ['Hva og når', 'Antall og rom', 'Bekreft og betal', 'Booket'];

  const pad = 'var(--bk-pad)';
  return <div className="hub-sheet-wrap" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) close(); }} style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(23,20,26,.72)', display: 'flex', justifyContent: 'flex-end' }}>
    <div ref={sheetRef} className="hub-sheet" role="dialog" aria-modal="true" aria-labelledby="hub-bk-title" tabIndex={-1} style={{ outline: 'none', '--bk-pad': '16px', position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 480, height: '100%', background: 'var(--hub-ink)', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)', boxShadow: 'var(--shadow-float)' }}>
      {/* Topp */}
      <div style={{ flex: 'none', borderBottom: '1px solid var(--hub-ink-3)', paddingTop: 'env(safe-area-inset-top)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: 56, padding: '0 8px' }}>
          {step > 0 && step < 3 ? <IconButton icon="arrow-left" label="Tilbake" tone="dark" size={44} onClick={back} /> : <span style={{ width: 44 }} />}
          <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
            <div id="hub-bk-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{titles[step]}</div>
            {step < 3 && <div style={{ fontSize: 12, color: 'var(--hub-grey-400)' }}>Steg {step + 1} av 3</div>}
          </div>
          <IconButton icon="x" label="Lukk" tone="dark" size={44} onClick={close} />
        </div>
        {step < 3 && <div aria-hidden="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4, padding: `0 ${pad} 10px` }}>{[0, 1, 2].map(i => <span key={i} style={{ height: 3, background: i <= step ? 'var(--hub-pink)' : 'var(--hub-ink-3)', transition: 'background var(--duration-base)' }} />)}</div>}
      </div>

      {/* Innhold */}
      <div ref={bodyRef} style={{ flex: 1, overflowY: 'auto', overscrollBehavior: 'contain', padding: `20px ${pad} 28px` }}>
        {step === 0 && <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {presetRoom && <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8, background: 'var(--hub-ink-2)', borderLeft: 'var(--border-accent) solid var(--hub-pink)' }}>
            <span style={{ width: 56, height: 42, flex: 'none', background: `url(${presetRoom.image}) center/cover var(--hub-ink-3)` }} />
            <span style={{ fontSize: 14, lineHeight: 1.4, color: 'var(--hub-grey-300)' }}><b style={{ color: 'var(--hub-cream)' }}>{presetRoom.name}</b> er valgt. {presetRoom.type ? 'Velg tid' : 'Velg sending eller egen tid'}, så sjekker vi at det er ledig.</span>
          </div>}
          <div role="radiogroup" aria-label="Hva vil dere booke" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
            {HUB_KINDS.map(o => { const on = kind === o.k;
              return <button key={o.k} type="button" role="radio" aria-checked={on} onClick={() => pickKind(o.k)} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '10px 2px 8px', minHeight: 72, border: `2px solid ${on ? 'var(--hub-pink)' : 'var(--hub-ink-3)'}`, background: on ? 'var(--hub-ink-2)' : 'transparent', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)' }}>
                <Icon name={o.icon} size={24} color={on ? 'var(--hub-pink)' : 'var(--hub-pink-light)'} />
                <span style={{ fontWeight: 700, fontSize: 13 }}>{o.label}</span>
              </button>; })}
          </div>
          <div>
            <HubLabel>Dag</HubLabel>
            <HubChipRow label="Velg dag">{days.map(d => <HubDayChip key={d} day={d} on={d === day} count={isSport ? hubMatchesOn(d).length : null} onClick={() => { setDay(d); setShowAll(false); if (match && match.day !== d) setMid(null); }} />)}</HubChipRow>
          </div>
          {isSport ? <div>
            <HubLabel aside={`${dayList.length} sendinger`}>Sending</HubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {featured.map(m => <HubMatchRow key={m.id} m={m} on={m.id === mid} onClick={() => pickMatch(m)} />)}
            </div>
            {dayList.length > featured.length && <Button variant="ghost" tone="dark" fullWidth icon="chevron-down" onClick={() => setShowAll(true)} style={{ marginTop: 6 }}>Vis alle {dayList.length} sendinger</Button>}
            <button type="button" onClick={() => pickKind('custom')} style={{ cursor: 'pointer', marginTop: 10, width: '100%', display: 'flex', alignItems: 'center', gap: 10, minHeight: 48, padding: '8px 12px', border: '2px dashed var(--hub-ink-line)', background: 'transparent', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)', textAlign: 'left' }}>
              <Icon name="clock" size={20} color="var(--hub-pink-light)" />
              <span style={{ flex: 1 }}><span style={{ display: 'block', fontWeight: 700, fontSize: 15 }}>Finner du ikke sendingen?</span><span style={{ fontSize: 12, color: 'var(--hub-grey-400)' }}>Book egen tid, og sett på det dere vil</span></span>
            </button>
          </div> : <>
            <div>
              <HubLabel aside={`${hubClock(start)}–${hubClock(end)}`}>Starttid</HubLabel>
              <HubChipRow label="Velg starttid">{HUB_TIMES.map(t => <HubTimeChip key={t} t={t} on={t === time} onClick={() => setTime(t)} />)}</HubChipRow>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <HubLabel>Varighet</HubLabel>
              <Stepper tone="dark" value={hours} min={1} max={6} unit="t" onChange={setHours} />
            </div>
            {kind === 'custom' && <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--hub-grey-400)' }}>Film eller noe eget? Logg inn på egne strømmekontoer på skjermen, eller koble til med HDMI.</p>}
          </>}
        </div>}

        {step === 1 && <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <button type="button" onClick={() => go(0)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', border: 0, background: 'var(--hub-ink-2)', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)', textAlign: 'left' }}>
            <span style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{whatLine}</span><span style={{ fontSize: 13, color: 'var(--hub-grey-300)' }}>{whenLine} · {hubHours(dur)}</span></span>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--hub-pink-light)' }}>Endre</span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div><HubLabel>{sim ? 'Hvor mange skal kjøre?' : 'Hvor mange blir dere?'}</HubLabel><div style={{ fontSize: 13, color: 'var(--hub-grey-400)', marginTop: -6 }}>{sim ? 'Én rigg per person' : 'Vi viser rommene som passer'}</div></div>
            <Stepper tone="dark" value={people} min={1} max={sim ? 6 : kind === 'gaming' ? 6 : 12} unit={sim ? '' : ''} onChange={setPeople} />
          </div>
          {sim && <Switch tone="dark" checked={whole} onChange={setWhole} label="Book hele rommet (6 rigger)" />}
          {match && <div>
            <HubLabel aside={`${hubClock(start)}–${hubClock(end)}`}>Ekstra tid</HubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '56px minmax(0,1fr)', gap: '8px 10px', alignItems: 'center' }}>
              <span style={{ fontSize: 14, color: 'var(--hub-grey-300)' }}>Før</span>
              <HubSeg label="Ekstra tid før sendingen" value={before} onChange={setBefore} items={[[0, 'Ingen'], [30, '30 min'], [60, '1 t']]} />
              <span style={{ fontSize: 14, color: 'var(--hub-grey-300)' }}>Etter</span>
              <HubSeg label="Ekstra tid etter sendingen" value={after} onChange={setAfter} items={[[0, 'Ingen'], [30, '30 min'], [60, '1 t']]} />
            </div>
          </div>}
          <div>
            <HubLabel aside={`${avail.length} ${avail.length === 1 ? 'ledig' : 'ledige'}`}>Rom</HubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {avail.map((r, i) => <HubRoomRow key={r.id} r={r} on={room && room.id === r.id} best={i === 0 && !sim} onClick={() => setRoomId(r.id)} price={priceOf(r)} perPerson={Math.ceil(priceOf(r) / Math.max(1, people))} note={sim ? (whole ? 'Alle 6 rigger' : `${people} av 6 rigger`) : r.capacity} />)}
              {avail.length === 0 && <div style={{ padding: 16, border: '2px dashed var(--hub-ink-line)', fontSize: 14, color: 'var(--hub-grey-300)' }}>Ingen ledige rom for {people} personer her. Prøv færre personer eller et annet tidspunkt.</div>}
            </div>
            {unavail.length > 0 && <>
              <button type="button" onClick={() => setShowUnavail(!showUnavail)} aria-expanded={showUnavail} style={{ cursor: 'pointer', marginTop: 6, display: 'flex', alignItems: 'center', gap: 6, minHeight: 44, padding: 0, border: 0, background: 'none', color: 'var(--hub-grey-300)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                <span style={{ display: 'inline-flex', transform: showUnavail ? 'rotate(180deg)' : 'none' }}><Icon name="chevron-down" size={16} /></span>{unavail.length} rom passer ikke
              </button>
              {showUnavail && <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{unavail.map(r => <HubRoomRow key={r.id} r={r} disabled note={soldOut(r) ? `Utsolgt · ${r.capacity}` : r.capacity} />)}</div>}
            </>}
          </div>
        </div>}

        {step === 2 && <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ background: 'var(--hub-ink-2)', borderTop: '3px solid var(--hub-pink)', padding: 16 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{room.name}</div>
                <div style={{ fontSize: 14, color: 'var(--hub-grey-300)', marginTop: 2 }}>{whatLine}</div>
                <div style={{ fontSize: 14, color: 'var(--hub-grey-300)' }}>{whenLine}</div>
              </div>
              <button type="button" onClick={() => go(1)} style={{ cursor: 'pointer', minHeight: 44, padding: '0 4px', border: 0, background: 'none', color: 'var(--hub-pink-light)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>Endre</button>
            </div>
            <div style={{ borderTop: '1px solid var(--hub-ink-3)', marginTop: 12, paddingTop: 8, fontSize: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span>{sim ? (whole ? 'Hele rommet' : `${people} rigger`) : `${people} personer`} · {hubHours(dur)}</span><span>{kr(roomSum)}</span></div>
              {foodN > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span>Mat og drikke · {foodN} stk</span><span>{kr(foodSum)}</span></div>}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0 0', fontWeight: 700, fontSize: 17 }}><span>Totalt</span><span>{kr(total)}</span></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <HubLabel>Hvem booker?</HubLabel>
            <Input tone="dark" label="Navn" autoComplete="name" value={name} onChange={e => setName(e.target.value)} error={tried && !nameOk ? 'Skriv navnet ditt.' : null} />
            <Input tone="dark" label="Mobilnummer" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="8 siffer" icon="phone" value={phone} onChange={e => setPhone(e.target.value)} help={tried && !phoneOk ? null : 'Kvittering og påminnelse kommer på SMS.'} error={tried && !phoneOk ? 'Skriv et norsk mobilnummer med 8 siffer.' : null} />
          </div>

          <div>
            <HubLabel>Betaling</HubLabel>
            <HubSeg label="Betalingsmåte" value={pay} onChange={setPay} items={[['vipps', 'Vipps'], ['card', 'Kort']]} />
            {pay === 'vipps' && <div style={{ marginTop: 14, padding: 14, background: 'var(--hub-ink-2)' }}>
              <Switch tone="dark" checked={split} onChange={setSplit} label={`Del regningen på ${people}`} />
              {split && <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--hub-grey-300)', marginTop: 10 }}>Du betaler din del nå, <b style={{ color: 'var(--hub-cream)' }}>{kr(perPerson)}</b>. Vi sender en betalingslenke du kan dele med gjengen. Rommet er ditt med en gang.</div>}
            </div>}
          </div>

          <div style={{ border: '1px solid var(--hub-ink-3)' }}>
            <button type="button" onClick={() => setFoodOpen(!foodOpen)} aria-expanded={foodOpen} style={{ cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', gap: 12, minHeight: 56, padding: '8px 14px', border: 0, background: 'transparent', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)', textAlign: 'left' }}>
              <Icon name="flame" size={20} color="var(--hub-pink-light)" />
              <span style={{ flex: 1 }}><span style={{ display: 'block', fontWeight: 700, fontSize: 15 }}>Forhåndsbestill mat</span><span style={{ fontSize: 12, color: 'var(--hub-grey-400)' }}>{foodN ? `${foodN} valgt · ${kr(foodSum)}` : 'Valgfritt. Alt kan også bestilles fra skjermen i rommet.'}</span></span>
              <span style={{ display: 'inline-flex', transform: foodOpen ? 'rotate(180deg)' : 'none' }}><Icon name="chevron-down" size={18} /></span>
            </button>
            {foodOpen && <div style={{ padding: '0 14px 14px' }}><HubFood food={food} setFood={setFood} /></div>}
          </div>

          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: 'var(--hub-grey-400)' }}>Gratis endring og avbestilling inntil 48 timer før. Ved å betale godtar du vilkårene.</p>
        </div>}

        {step === 3 && <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 12 }}>
          <LetterBox size={56} fill>✓</LetterBox>
          <div>
            <h2 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, lineHeight: 1.04, letterSpacing: 'var(--tracking-display)' }}>{room.name} er booket</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: 'var(--hub-grey-300)' }}>{whatLine}<br />{whenLine}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[['smartphone', 'Kvittering på SMS', `Sendt til ${phone || 'mobilen din'}. Vis den når dere kommer.`], split && pay === 'vipps' ? ['users', 'Del betalingslenken', `Gjengen betaler ${kr(perPerson)} hver i Vipps.`] : null, ['clock', 'Rommet er klart', `Fra ${hubClock(start)}. Vi har drikke klart på bordet.`], ['flame', 'Mat', foodN ? 'Serveres når dere kommer, eller i pausen.' : 'Bestill fra skjermen i rommet når som helst.']].filter(Boolean).map(([ic, t, d]) => <div key={t} style={{ display: 'flex', gap: 12, padding: '12px 0', borderTop: '1px solid var(--hub-ink-3)' }}>
              <Icon name={ic} size={20} color="var(--hub-pink-light)" style={{ marginTop: 2 }} />
              <div><div style={{ fontWeight: 700, fontSize: 15 }}>{t}</div><div style={{ fontSize: 14, color: 'var(--hub-grey-300)' }}>{d}</div></div>
            </div>)}
          </div>
          <Button tone="dark" icon="share-2" fullWidth size="lg" onClick={() => { const t = `${room.name} på HUB – ${whatLine}, ${whenLine}`; if (navigator.share) navigator.share({ title: 'HUB', text: t }).catch(() => {}); }}>Del med gjengen</Button>
        </div>}
      </div>

      {/* Bunnlinje */}
      <div style={{ flex: 'none', borderTop: '1px solid var(--hub-ink-3)', background: 'var(--hub-ink-2)', padding: `12px ${pad} calc(12px + env(safe-area-inset-bottom))`, display: 'flex', alignItems: 'center', gap: 12 }}>
        {step === 3 ? <Button fullWidth size="lg" variant="secondary" tone="dark" onClick={close}>Ferdig</Button> : <>
          <div style={{ flex: 1, minWidth: 0 }} aria-live="polite">
            {step === 0 ? <div style={{ fontSize: 14, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: ctaOn ? 'var(--hub-cream)' : 'var(--hub-grey-400)' }}>{info}</div> : <>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: 1.1 }}>{room ? kr(step === 2 && split && pay === 'vipps' ? perPerson : total) : '–'}</div>
              <div style={{ fontSize: 12, color: 'var(--hub-grey-400)' }}>{!room ? 'Velg et rom' : step === 2 && split && pay === 'vipps' ? `din del av ${kr(total)}` : `${kr(perPerson)} per person`}</div>
            </>}
          </div>
          <Button size="lg" disabled={!ctaOn || busy} iconRight={step < 2 ? 'arrow-right' : undefined} onClick={onCta} style={{ flex: 'none', minWidth: 150 }}>{cta}</Button>
        </>}
      </div>
    </div>
  </div>;
}

/* Kompakt inngang på forsiden: dag, sendinger og snarveier. Åpner arket. */
function QuickBook({ id }) {
  const { Eyebrow, Icon } = window.HUBDesignSystem_d87c4c;
  const days = React.useMemo(hubDays, []);
  const [day, setDay] = React.useState(days[0]);
  const list = hubMatchesOn(day);
  const top = [...list.filter(m => m.big), ...list.filter(m => !m.big)].slice(0, 3).sort((a, b) => a.time.localeCompare(b.time));
  return <section id={id} className="hub-qb" style={{ background: 'var(--hub-ink)' }}>
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '36px var(--page-margin) 40px' }}>
      <Eyebrow tone="dark">Book rom</Eyebrow>
      <h2 style={{ margin: '6px 0 16px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', lineHeight: 1.04, letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)' }}>Hva skal dere se?</h2>
      <HubChipRow label="Velg dag">{days.map(d => <HubDayChip key={d} day={d} on={d === day} onClick={() => setDay(d)} />)}</HubChipRow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }}>
        {top.map(m => <HubMatchRow key={m.id} m={m} onClick={() => window.hubBook({ match: m.id })} />)}
      </div>
      <button type="button" onClick={() => window.hubBook({ kind: 'sport', day })} style={{ cursor: 'pointer', width: '100%', marginTop: 6, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, border: '2px solid var(--hub-ink-3)', background: 'transparent', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15 }}>Alle {list.length} sendinger {day.split(' ')[0].toLowerCase()}<Icon name="arrow-right" size={18} /></button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, marginTop: 16 }}>
        {HUB_KINDS.slice(1).map(o => <button key={o.k} type="button" onClick={() => window.hubBook({ kind: o.k })} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '10px 4px', minHeight: 64, border: '2px solid var(--hub-ink-3)', background: 'var(--hub-ink-2)', color: 'var(--hub-cream)', fontFamily: 'var(--font-body)' }}>
          <Icon name={o.icon} size={22} color="var(--hub-pink-light)" />
          <span style={{ fontWeight: 700, fontSize: 13 }}>{o.label}</span>
        </button>)}
      </div>
    </div>
  </section>;
}

/* Vert som holder arket og eksponerer window.hubBook */
function BookingHost() {
  const [preset, setPreset] = React.useState(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => { window.hubBook = (p = {}) => { setPreset(p); setN(x => x + 1); }; return () => { delete window.hubBook; }; }, []);
  if (!preset) return null;
  return <BookingSheet key={n} preset={preset} onClose={() => setPreset(null)} />;
}

Object.assign(window, { BookingSheet, BookingHost, QuickBook, hubClock, hubDur, HUB_DUR });
