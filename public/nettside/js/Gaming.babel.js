const HUB_GAMES = [
  ['Sport', [['EA Sports FC', 'PS5 · Xbox · PC'], ['NBA 2K', 'PS5 · Xbox'], ['Madden NFL', 'PS5 · Xbox'], ['NHL', 'PS5 · Xbox'], ['Rocket League', 'PS5 · Xbox · PC · Switch']]],
  ['Fest og sofa', [['Mario Kart 8 Deluxe', 'Switch'], ['Super Smash Bros. Ultimate', 'Switch'], ['Overcooked! 2', 'PS5 · Switch'], ['Mario Party Superstars', 'Switch'], ['It Takes Two', 'PS5 · Xbox']]],
  ['Skyting', [['Call of Duty', 'PS5 · Xbox · PC'], ['Fortnite', 'PS5 · Xbox · PC · Switch'], ['Counter-Strike 2', 'PC'], ['Valorant', 'PC'], ['Apex Legends', 'PS5 · PC']]],
  ['Slåssing', [['Street Fighter 6', 'PS5 · Xbox'], ['Tekken 8', 'PS5 · Xbox'], ['Mortal Kombat 1', 'PS5 · Xbox']]],
  ['Retro', [['Crash Bandicoot N. Sane Trilogy', 'PS5 · Switch'], ['Tomb Raider I–III Remastered', 'PS5 · Switch'], ['Doom + Doom II', 'PC · Xbox'], ['Street Fighter 30th Anniversary Collection', 'PS5']]],
  ['Simracing', [['EA Sports F1', 'Simrigg'], ['Assetto Corsa Competizione', 'Simrigg'], ['iRacing', 'Simrigg'], ['Gran Turismo 7', 'Simrigg · PS5']]],
];
function Gaming() {
  const { Tag, Toast, Eyebrow } = window.HUBDesignSystem_d87c4c;
  const R = window.HUB_DATA.rooms;
  const [cat, setCat] = React.useState('Alle');
    const games = HUB_GAMES.filter(([c]) => cat === 'Alle' || c === cat);
  return <div>
    <section style={{ background: 'var(--hub-ink-2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px var(--page-margin) 40px' }}>
        <Eyebrow tone="dark">Gaming og simracing</Eyebrow>
        <h2 style={{ margin: '8px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)' }}>Spill</h2>
        <p style={{ margin: '0 0 20px', fontSize: 16, color: 'var(--hub-grey-300)' }}>Et utvalg av det som er installert. Si fra om du savner noe.</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>{['Alle', ...HUB_GAMES.map(([c]) => c)].map(c => <Tag key={c} tone="dark" selected={cat === c} onClick={() => setCat(c)}>{c}</Tag>)}</div>
        <div style={{ columns: 'min(100%,300px) 3', columnGap: 40 }}>
          {games.map(([c, list]) => <div key={c} style={{ breakInside: 'avoid', marginBottom: 28 }}>
            <h3 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--hub-cream)', paddingBottom: 8, borderBottom: '3px solid var(--hub-pink)' }}>{c}</h3>
            {list.map(([gm, p]) => <div key={gm} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--hub-ink-3)' }}><span style={{ color: 'var(--hub-cream)', fontWeight: 600, fontSize: 15 }}>{gm}</span><span style={{ fontSize: 13, color: 'var(--hub-grey-400)', whiteSpace: 'nowrap' }}>{p}</span></div>)}
          </div>)}
        </div>
      </div>
    </section>
    <section style={{ background: 'var(--hub-ink)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px var(--page-margin) 48px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
        <div style={{ flex: '1 1 280px' }}><h2 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,4vw,36px)', letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)' }}>Book gaming eller simracing</h2><p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: 'var(--hub-grey-300)' }}>PS5, Xbox, Switch og gaming-PC i alle gamingrom. Seks simrigger side om side.</p></div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}><window.HUBDesignSystem_d87c4c.Button size="lg" iconRight="arrow-right" onClick={() => window.hubBook({ kind: 'gaming' })}>Book gaming</window.HUBDesignSystem_d87c4c.Button><window.HUBDesignSystem_d87c4c.Button size="lg" variant="secondary" tone="dark" onClick={() => window.hubBook({ kind: 'sim' })}>Book simracing</window.HUBDesignSystem_d87c4c.Button></div>
      </div>
    </section>
  </div>;
}
Object.assign(window, { Gaming });
