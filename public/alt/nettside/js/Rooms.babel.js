function Rooms({ onBook, onGaming, onSim }) {
  const { Eyebrow, Button, Icon, Tag } = window.HUBDesignSystem_d87c4c;
  const all = window.HUB_DATA.rooms;
  const groups = [['Sportsrom', 'Private rom med storskjerm for kamper og sendinger. Plass til 3 til 12 personer.', all.filter(r => !r.type)], ['Gaming og simracing', 'Mindre rom med konsoll og PC, og simracing med seks rigger side om side.', all.filter(r => r.type)]];
  const kit = [['tv', 'Storskjerm'], ['volume-2', 'Surroundlyd'], ['gamepad-2', 'PS5 og Xbox'], ['tablet', 'Bestill mat fra skjermen'], ['wifi', 'Wifi og HDMI'], ['lock', 'Bare dere i rommet']];
  return <div>
    <section className="hub-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '56px var(--page-margin) 72px' }}>
      <Eyebrow tone="dark">Rom</Eyebrow>
      <h1 style={{ margin: '8px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,5vw,56px)', letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)' }}>Finn rommet som passer gjengen</h1>
      {groups.map(([title, sub, rooms]) => <div key={title} style={{ marginTop: 48 }}>
      <h2 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,4vw,32px)', letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)' }}>{title}</h2>
      <p style={{ margin: '0 0 24px', fontSize: 16, color: 'var(--hub-grey-300)' }}>{sub}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,280px),1fr))', gap: 'clamp(16px,3vw,24px)' }}>
        {rooms.map(r => { const g = r.type === 'gaming', sim = r.type === 'sim';
          return <article key={r.id} style={{ display: 'flex', flexDirection: 'column', background: 'var(--hub-ink-2)' }}>
            <div style={{ aspectRatio: '16/10', background: r.image ? `url(${r.image}) center/cover var(--hub-ink)` : 'var(--hub-ink-3)', display: 'grid', placeItems: 'center' }}>{!r.image && <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--hub-grey-400)' }}><Icon name="image" size={18} />Bilde kommer</span>}</div>
            <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
              <div style={{ fontSize: 13, color: 'var(--hub-grey-400)' }}>{sim ? 'Simracing' : g ? 'Gaming' : 'Sportsrom'}</div>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.015em', color: 'var(--hub-cream)' }}>{r.name}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 14, color: 'var(--hub-grey-300)', marginTop: 4 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="users" size={16} />{r.capacity}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name={sim ? 'gauge' : g ? 'gamepad-2' : 'tv'} size={16} />{sim ? 'Ratt og pedaler' : g ? 'Konsoll og PC' : 'Storskjerm'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 'auto', paddingTop: 16 }}>
                <span style={{ fontWeight: 700, color: 'var(--hub-cream)' }}>{sim && <span style={{ fontWeight: 400, color: 'var(--hub-grey-400)', fontSize: 14 }}>fra </span>}{kr(r.perHour)} <span style={{ fontWeight: 400, color: 'var(--hub-grey-400)', fontSize: 14 }}>/ {sim ? 'rigg / time' : 'time'}</span></span>
                <Button size="sm" tone="dark" iconRight="arrow-right" onClick={() => window.hubBook({ room: r.id })}>Book</Button>
              </div>
            </div>
          </article>; })}
      </div>
      </div>)}
    </section>
    <section style={{ background: 'var(--hub-cream)', color: 'var(--hub-ink)' }}>
      <div className="hub-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '56px var(--page-margin)' }}>
        <h2 style={{ margin: '0 0 28px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: 'var(--tracking-display)' }}>Inkludert i alle rom</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: '16px 32px' }}>
          {kit.map(([ic, t]) => <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 16, borderBottom: '1px solid var(--hub-cream-line)' }}><Icon name={ic} size={22} color="var(--hub-pink-deep)" /><span style={{ fontWeight: 600, fontSize: 16 }}>{t}</span></div>)}
        </div>
      </div>
    </section>
  </div>;
}
window.Rooms = Rooms;
