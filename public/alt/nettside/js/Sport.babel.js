function Sport({ onPick }) {
  const { Eyebrow, Button, Tag } = window.HUBDesignSystem_d87c4c;
  const D = window.HUB_DATA;
  const matches = D.matches.slice().sort((a, b) => parseInt(a.day.match(/\d+/)) - parseInt(b.day.match(/\d+/)) || a.time.localeCompare(b.time));
  const [league, setLeague] = React.useState(null);
  const leagues = [...new Map(matches.map(m => [m.league, m])).values()].map(m => ({ name: m.league, sport: m.sport, n: matches.filter(x => x.league === m.league).length }));
  const list = matches.filter(m => !league || m.league === league);
  const sports = [...new Set(leagues.map(l => l.sport))];
  const [scat, setScat] = React.useState('Alle');
  return <div>
    <section style={{ background: 'var(--hub-ink-2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px var(--page-margin) 40px' }}>
        <Eyebrow tone="dark">Storskjerm</Eyebrow>
        <h1 style={{ margin: '8px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4vw,40px)', letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)' }}>Sendinger</h1>
        <p style={{ margin: '0 0 16px', fontSize: 15, color: 'var(--hub-grey-300)' }}>Sport, show og andre live-events vi viser. Velg en turnering eller et program for å se sendingene, og en sending for å booke rom. Film kan bookes direkte.</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>{['Alle', ...sports].map(c => <Tag key={c} tone="dark" selected={scat === c} onClick={() => setScat(c)}>{c}</Tag>)}</div>
        <div style={{ columns: '260px 4', columnGap: 32 }}>
          {sports.filter(c => scat === 'Alle' || c === scat).map(c => <div key={c} style={{ breakInside: 'avoid', marginBottom: 24 }}>
            <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--hub-cream)', paddingBottom: 6, borderBottom: '3px solid var(--hub-pink)' }}>{c}</h3>
            {leagues.filter(l => l.sport === c).map(l => <div key={l.name} onClick={() => setLeague(league === l.name ? null : l.name)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--hub-ink-3)' }}><span style={{ color: league === l.name ? 'var(--hub-pink-light)' : 'var(--hub-cream)', fontWeight: 600, fontSize: 15 }}>{l.name}</span><span style={{ fontSize: 13, color: 'var(--hub-grey-400)', whiteSpace: 'nowrap' }}>{l.n} {l.n === 1 ? 'sending' : 'sendinger'}</span></div>)}
          </div>)}
        </div>
      </div>
    </section>
    <section style={{ background: 'var(--hub-ink)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px var(--page-margin) 56px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)' }}>{league || 'Kommende sendinger'}</h2>
          {league && <Button size="sm" variant="ghost" tone="dark" icon="x" onClick={() => setLeague(null)}>Vis alle</Button>}
        </div>
        <div style={{ borderBottom: '1px solid var(--hub-ink-3)' }}>{list.map(m => <MatchRow compact key={m.id} m={m} onPick={onPick} />)}</div>
      </div>
    </section>
  </div>;
}
window.Sport = Sport;
