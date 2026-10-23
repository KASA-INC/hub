const HUB_LEAGUE_LOGO = { 'Premier League': 'premier-league.png', 'Champions League': 'champions-league.svg', 'Formel 1': 'formel-1.svg', 'Eliteserien': 'eliteserien.png', 'Bundesliga': 'bundesliga.png', 'LaLiga': 'laliga.png', 'Serie A': 'serie-a.png', 'Ligue 1': 'ligue-1.png', 'NBA': 'nba.png', 'NHL': 'nhl.png', 'NFL': 'nfl.png', 'EHF EURO 2026': 'ehf-euro.png', 'ATP Basel': 'atp.png', 'PDC European Championship': 'pdc.png', 'LoL Worlds': 'lol-worlds.png', 'UFC': 'ufc.png', 'MotoGP': 'motogp.png', 'Alpint verdenscup': 'fis.svg' };
function LeagueLogo({ league }) {
  const file = HUB_LEAGUE_LOGO[league];
  const abbr = league.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  return <div className="hub-logo" style={{ width: 56, height: 56, flex: 'none', display: 'grid', placeItems: 'center', border: file ? 0 : '2px solid var(--hub-ink-line)' }}>
    {file ? <img src={`assets/leagues/${file}`} alt={league} style={{ maxWidth: 48, maxHeight: 44, objectFit: 'contain' }} />
      : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--hub-grey-400)' }}>{abbr}</span>}
  </div>;
}
function MatchRow({ m, onPick, compact }) {
  const { Badge, Button } = window.HUBDesignSystem_d87c4c;
  const [h, setH] = React.useState(false);
  return <div className="hub-matchrow" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={() => onPick(m)}
    style={{ display: 'grid', gridTemplateColumns: '140px 56px minmax(0,1fr) auto', alignItems: 'center', gap: compact ? 16 : 24, padding: compact ? '10px 0' : '20px 0', borderTop: '1px solid var(--hub-ink-3)', cursor: 'pointer' }}>
    <div><div style={{ fontWeight: 700, color: 'var(--hub-cream)' }}>{m.day}</div><div style={{ fontSize: 14, color: 'var(--hub-grey-400)' }}>{m.time}</div></div>
    <LeagueLogo league={m.league} />
    <div style={{ minWidth: 0 }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 4 }}><span style={{ fontSize: 13, color: 'var(--hub-grey-400)' }}>{m.league}</span>{m.big && <Badge>Storkamp</Badge>}</div>
      <div className="hub-mtitle" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: compact ? 18 : 24, letterSpacing: '-0.015em', color: h ? 'var(--hub-pink-light)' : 'var(--hub-cream)', transition: 'color var(--duration-fast)' }}>{m.away ? `${m.home} – ${m.away}` : m.home}</div>
    </div>
    <Button size="sm" variant={h ? 'primary' : 'outline'} tone="dark" iconRight="arrow-right">Velg rom</Button>
  </div>;
}
function Home({ onDone, onNav = () => {} }) {
  const { Eyebrow, Tag, Button, Card, Icon } = window.HUBDesignSystem_d87c4c;
  return <div>
    <section className="hub-hero" style={{ position: 'relative', minHeight: 560, display: 'flex', alignItems: 'flex-end', background: 'url(assets/images/fasade.avif) center 40%/cover' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(23,20,26,0) 30%, rgba(23,20,26,.92) 100%)' }} />
      <div style={{ position: 'relative', maxWidth: 1200, width: '100%', margin: '0 auto', padding: '0 var(--page-margin) 56px' }}>
        <Eyebrow tone="dark" style={{ marginBottom: 14 }}>Private kamprom og gamingrom</Eyebrow>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,6vw,84px)', lineHeight: 1.02, letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)', maxWidth: 820, textWrap: 'balance' }}>Ditt eget kamprom. Book det med gjengen.</h1>
        <p style={{ margin: '18px 0 28px', fontSize: 'clamp(16px,2.2vw,19px)', lineHeight: 1.5, color: 'var(--hub-grey-300)', maxWidth: 620 }}>Private rom for vennegjenger med storskjerm, god lyd, gode sofaer og mat servert på rommet. Booket på forhånd, bare for dere.</p>
        <Button size="lg" iconRight="arrow-right" onClick={() => window.hubBook({})}>Book rom</Button>
      </div>
    </section>
    <QuickBook id="book" />
    <section style={{ background: 'var(--hub-ink-2)' }}>
      <div className="hub-sec hub-split" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px var(--page-margin)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 48, alignItems: 'center' }}>
        <div>
          <Eyebrow tone="dark">Gaming og simracing</Eyebrow>
          <h2 style={{ margin: '8px 0 16px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,5vw,44px)', letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)', textWrap: 'balance' }}>Spill på storskjerm, eller kjør mot hverandre</h2>
          <p style={{ margin: '0 0 24px', fontSize: 17, lineHeight: 1.55, color: 'var(--hub-grey-300)', maxWidth: 520 }}>Fire gamingrom oppkalt etter spillklassikere, og to simracingrom med seks rigger hver. Alt er satt opp når dere kommer.</p>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 28, maxWidth: 520 }}>
            {[['game-controller', 'PS5, Xbox, Switch og gaming-PC', 'Kontrollere og headset til alle'], ['gauge', 'Simrigger med ratt, pedaler og sete', 'Book én rigg eller hele rommet'], ['trophy', 'Rundetider på storskjermen', 'Ukens raskeste havner på tavla']].map(([ic, t, d]) => <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--hub-ink-3)' }}>
              <Icon name={ic} size={28} color="var(--hub-pink-light)" />
              <div><div style={{ fontWeight: 700, color: 'var(--hub-cream)' }}>{t}</div><div style={{ fontSize: 14, color: 'var(--hub-grey-400)' }}>{d}</div></div>
            </div>)}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button iconRight="arrow-right" onClick={() => onNav('book:gaming')}>Book gaming</Button>
            <Button variant="secondary" tone="dark" onClick={() => onNav('gaming')}>Se spillene</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ gridColumn: '1 / -1', aspectRatio: '16/9', background: 'url(assets/images/room-silverstone.avif) center/cover var(--hub-ink)' }}></div>
          <div style={{ aspectRatio: '4/3', background: 'url(assets/images/room-tomb-raider.avif) center/cover var(--hub-ink)' }}></div>
          <div style={{ aspectRatio: '4/3', background: 'url(assets/images/room-street-fighter-ii.avif) center/cover var(--hub-ink)' }}></div>
        </div>
      </div>
    </section>
    <section style={{ background: 'var(--hub-ink)' }}>
      <div className="hub-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px var(--page-margin)' }}>
        <Eyebrow tone="dark">Mat og drikke</Eyebrow>
        <h2 style={{ margin: '8px 0 28px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,5vw,44px)', letterSpacing: 'var(--tracking-display)', color: 'var(--hub-cream)', textWrap: 'balance', maxWidth: 760 }}>Pizza du kommer tilbake for</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 16, marginBottom: 32 }}>
          {[['El Clásico', 'Real Madrid – Barcelona', 'Tomatsaus, mozzarella og basilikum', 179, 'leaf', 'el-clasico'], ['Old Firm', 'Celtic – Rangers', 'Pulled pork, whisky-BBQ, rødløk og cheddar', 229, null, 'old-firm'], ['Derby della Madonnina', 'Inter – AC Milan', 'Salami Milano, mozzarella og chili', 199, 'flame', 'derby-della-madonnina']].map(([n, derby, d, p, ic, img]) => <div key={n}>
            <div style={{ aspectRatio: '5/4', background: `url(assets/images/pizza-${img}.avif) center/cover var(--hub-ink-2)`, marginBottom: 14 }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}><span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--hub-cream)' }}>{n}</span>{ic && <Icon name={ic} size={18} color={ic === 'flame' ? '#e8735c' : '#7cc48a'} />}</div>
            <div style={{ fontWeight: 700, color: 'var(--hub-grey-300)' }}>{kr(p)}</div>
          </div>)}
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="secondary" tone="dark" iconRight="arrow-right" onClick={() => onNav('menu')}>Se hele menyen</Button>
        </div>
      </div>
    </section>
    <section style={{ background: 'var(--hub-cream)', color: 'var(--hub-ink)' }}>
      <div className="hub-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px var(--page-margin)' }}>
        <Eyebrow>Mer enn kamp</Eyebrow>
        <h2 style={{ margin: '8px 0 36px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,5vw,44px)', letterSpacing: 'var(--tracking-display)', textWrap: 'balance' }}>Book rommet til noe annet også</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 16 }}>
          {[['For bedrifter', 'Bedrift', 'Møter, kick-off og teambuilding med storskjerm og servering.', 'Ta kontakt', 'bedrift'], ['For gjengen', 'Gaming', 'Konsoll, simracing og quiz på storskjerm med god lyd.', 'Book rom', 'book:gaming'], ['For anledningen', 'Selskap', 'Bursdag, utdrikningslag eller julebord. Vi ordner maten.', 'Ta kontakt', 'selskap']].map(([when, t, d, cta, v]) =>
            <Card key={t} variant="accent" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 13, color: 'var(--hub-grey-600)' }}>{when}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.015em' }}>{t}</div>
              <div style={{ color: 'var(--hub-grey-700)', fontSize: 16, lineHeight: 1.5, flex: 1 }}>{d}</div>
              <Button variant="secondary" size="sm" iconRight="arrow-right" onClick={() => onNav(v)} style={{ alignSelf: 'flex-start', marginTop: 8 }}>{cta}</Button>
            </Card>)}
        </div>
      </div>
    </section>
  </div>;
}
Object.assign(window, { Home, LeagueLogo, MatchRow });