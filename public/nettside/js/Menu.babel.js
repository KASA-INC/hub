const HUB_MENU = {
  Mat: {
    intro: 'Alt serveres på rommet. Pizzaene er steinovnsbakt, 30 cm, og holder til to. Alle pizzaer kan fås med glutenfri bunn uten tillegg.',
    cols: [['Pizza'], ['Burgere og retter', 'Tilbehør']],
    groups: [
      { title: 'Pizza', items: [
        ['El Clásico', 'Tomatsaus, mozzarella og basilikum', 179, 'Real Madrid – Barcelona', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri', 'Vegansk']],
        ['Hudson River Derby', 'Tomatsaus, mozzarella og pepperoni', 199, 'New York Red Bulls – NYCFC', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']],
        ['Derby della Madonnina', 'Salami Milano, mozzarella og chili', 199, 'Inter – AC Milan', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']],
        ['Kıtalararası Derbi', 'Kebabkjøtt, rødløk, jalapeños og hvitløksdressing', 219, 'Fenerbahçe – Galatasaray', ['Gluten', 'Melk', 'Egg', 'Sennep'], ['Glutenfri', 'Laktosefri', 'Eggfri']],
        ['El Tráfico', 'Krydret kjøttdeig, mais, nachos og rømme', 219, 'LA Galaxy – LAFC', ['Gluten', 'Melk', 'Selleri'], ['Glutenfri', 'Laktosefri']],
        ['Revierderby', 'Currywurst, karriketchup og sprøstekt løk', 209, 'Dortmund – Schalke', ['Gluten', 'Melk', 'Sennep', 'Selleri'], ['Glutenfri', 'Laktosefri']],
        ['Old Firm', 'Pulled pork, whisky-BBQ, rødløk og cheddar', 229, 'Celtic – Rangers', ['Gluten', 'Melk', 'Sennep'], ['Glutenfri', 'Laktosefri']],
        ['Derby della Capitale', 'Carbonara med guanciale, pecorino og eggeplomme', 229, 'Roma – Lazio', ['Gluten', 'Melk', 'Egg'], ['Glutenfri', 'Laktosefri']],
        ['Superclásico', 'Biff, chimichurri, rødløk og mozzarella', 239, 'Boca Juniors – River Plate', ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']],
        ['Derby della Lanterna', 'Pesto, grillede grønnsaker og mozzarella (vegetar)', 209, 'Genoa – Sampdoria', ['Gluten', 'Melk', 'Nøtter'], ['Glutenfri', 'Laktosefri', 'Vegansk', 'Nøttefri']],
        ['Tyne-Wear Derby', 'Sprøstekt kylling, ostesaus, cheddar og vårløk', 219, 'Newcastle – Sunderland', ['Gluten', 'Melk', 'Egg'], ['Glutenfri', 'Laktosefri']],
      ] },
      { title: 'Burgere og retter', items: [
        ['Smashburger', 'Cheddar, sylteagurk og husets dressing, med pommes', 189, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Laktosefri', 'Sesamfri']],
        ['Dobbel smash', 'To burgere, bacon og cheddar, med pommes', 229, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Laktosefri', 'Sesamfri']],
        ['Halloumiburger', 'Coleslaw og chilimajones, med pommes (vegetar)', 179, null, ['Gluten', 'Melk', 'Egg', 'Sennep', 'Sesam'], ['Glutenfri', 'Vegansk med plantebasert burger']],
        ['Kyllingvinger', '12 stk, BBQ eller hot', 179, null, ['Sennep', 'Selleri']],
      ] },
      { title: 'Tilbehør', items: [
        ['Loaded fries', 'Cheddar, jalapeños og rømme', 129, null, ['Melk'], ['Laktosefri', 'Vegansk']],
        ['Løkringer', 'Med aioli', 89, null, ['Gluten', 'Egg', 'Melk'], ['Glutenfri']],
        ['Hvitløksdressing', 'Eller chiliolje', 25, null, ['Egg', 'Sennep'], ['Vegansk']],
        ['Hvitløksbrød', 'Med smeltet ost', 79, null, ['Gluten', 'Melk'], ['Glutenfri', 'Laktosefri']],
      ] },
    ],
  },
  Drikke: {
    intro: 'Bestilles fra skjermen i rommet og kommer på bordet.',
    cols: [['Øl og cider', 'Vin'], ['Drinker', 'Alkoholfritt']],
    groups: [
      { title: 'Drinker', items: [
        ['Red Devils', 'Tequila, blodappelsin, lime og chili', 159, 'Manchester United', null],
        ['Sky Blues', 'Vodka, blå curaçao, sitron og tonic', 149, 'Manchester City', null],
        ['The Toffees', 'Bourbon, toffeesirup, sitron og eggehvite', 159, 'Everton', ['Egg'], ['Vegansk']],
        ['The Magpies', 'Vodka, kaffelikør og espresso med hvitt skum', 159, 'Newcastle United', null],
        ['Black Cats', 'Mørk rom, ingefærøl og lime', 149, 'Sunderland', null],
        ['The Cherries', 'Gin, kirsebærlikør og sitron', 149, 'Bournemouth', null],
        ['The Canaries', 'Limoncello, prosecco og soda', 149, 'Norwich City', ['Sulfitt']],
        ['Galácticos', 'Cava med ferskenpuré og gullglitter', 159, 'Real Madrid', ['Sulfitt']],
        ['Blaugrana', 'Vodka, blåbær og granateple', 149, 'Barcelona', null],
        ['Rossoneri', 'Campari, rød vermut og soda', 149, 'AC Milan', ['Sulfitt']],
        ['La Vecchia Signora', 'Old fashioned med bourbon, bitter og appelsin', 169, 'Juventus', null],
        ['Schwarzgelben', 'Jägermeister, ananas og lime', 149, 'Borussia Dortmund', null],
        ['Les Phocéens', 'Pastis, mynte, sitron og isvann', 139, 'Marseille', null],
      ] },
      { title: 'Alkoholfritt', items: [
        ['Erdinger Alkoholfrei', 'Alkoholfri hvete, 0,5 l', 79, null, ['Gluten']],
        ['Brus', '0,5 l', 45],
        ['Energidrikk', '0,33 l', 49],
        ['Kaffe', 'Kanne til bordet', 89],
      ] },
      { title: 'Øl og cider', items: [
        ['Carlsberg', 'Pils fra fat, 0,5 l', 109, null, ['Gluten']],
        ['Heineken', 'Pils fra fat, 0,5 l', 115, null, ['Gluten']],
        ['Ringnes', 'Pils fra fat, 0,5 l', 105, null, ['Gluten']],
        ['Guinness', 'Stout fra fat, 0,5 l', 129, null, ['Gluten']],
        ['Amstel', 'Lager, flaske 0,33 l', 95, null, ['Gluten']],
        ['Bitburger', 'Pils, flaske 0,33 l', 99, null, ['Gluten']],
        ['Brahma', 'Lager, flaske 0,35 l', 95, null, ['Gluten']],
        ['Estrella Damm', 'Lager, flaske 0,33 l', 99, null, ['Gluten']],
        ['Newcastle Brown Ale', 'Brown ale, flaske 0,33 l', 109, null, ['Gluten']],
        ['Daura Damm', 'Glutenfri lager, flaske 0,33 l', 99, null, null],
        ['Peroni Nastro Azzurro', 'Lager, flaske 0,33 l', 99, null, ['Gluten']],
        ['Cider', '0,33 l', 99, null, ['Sulfitt']],
        ['Bøtte', '6 valgfrie flasker på is', 499, null, ['Gluten']],
      ] },
      { title: 'Vin', items: [
        ['Hvitvin', 'Glass, 15 cl', 129, null, ['Sulfitt']],
        ['Rødvin', 'Glass, 15 cl', 129, null, ['Sulfitt']],
        ['Rosé', 'Glass, 15 cl', 129, null, ['Sulfitt']],
        ['Prosecco', 'Glass, 12 cl', 139, null, ['Sulfitt']],
        ['Hvitvin, flaske', '75 cl', 549, null, ['Sulfitt']],
        ['Rødvin, flaske', '75 cl', 549, null, ['Sulfitt']],
        ['Prosecco, flaske', '75 cl', 599, null, ['Sulfitt']],
      ] },
    ],
  },
  Snacks: {
    intro: 'Til kampstart eller gaming. Kommer på bordet når du vil.',
    cols: [['Til deling'], ['Søtt']],
    groups: [
      { title: 'Til deling', items: [
        ['Nachos', 'Ost, salsa, guacamole og rømme', 159, null, ['Melk'], ['Laktosefri', 'Vegansk']],
        ['Popcorn', 'Stor bolle, salt eller karamell', 59, null, ['Melk'], ['Laktosefri']],
        ['Chips og dip', 'To poser og to dipper', 79, null, ['Melk'], ['Laktosefri']],
        ['Nøttemiks', 'Saltede nøtter', 49, null, ['Peanøtter', 'Nøtter']],
      ] },
      { title: 'Søtt', items: [
        ['Godteskål', 'Blandet smågodt til bordet', 99, null, ['Gluten', 'Melk', 'Soya'], ['Glutenfri', 'Vegansk']],
        ['Sorbet', 'Tre kuler: mango, bringebær og sitron', 89, null, null],
        ['Brownies', '4 stk', 109, null, ['Gluten', 'Melk', 'Egg', 'Soya', 'Nøtter'], ['Glutenfri', 'Nøttefri']],
      ] },
    ],
  },
};
[['Mat', 'Pizza'], ['Drikke', 'Drinker']].forEach(([t, g]) => HUB_MENU[t].groups.find(x => x.title === g).items.sort((a, b) => { const k = s => s.replace(/^(the|la|le|les|el|los|las|il|die|der|das)\s+/i, ''); return k(a[0]).localeCompare(k(b[0]), 'nb'); }));
const HUB_MENU_NO = (() => { let i = 0; const map = {}; ['Mat', 'Drikke', 'Snacks'].forEach(k => HUB_MENU[k].groups.forEach(g => { if (k === 'Drikke' && g.title !== 'Drinker') return; g.items.forEach(it => { map[it[0]] = ++i; }); })); return map; })();
const HUB_MENU_TAGS = {
  'Derby della Madonnina': ['hot'], 'Kıtalararası Derbi': ['hot'], 'El Tráfico': ['hot'], 'Kyllingvinger': ['hot'], 'Red Devils': ['hot'],
  'El Clásico': ['veg'], 'Derby della Lanterna': ['veg'], 'Hvitløksbrød': ['veg'], 'Løkringer': ['veg'], 'Popcorn': ['veg'], 'Chips og dip': ['veg'], 'Brownies': ['veg'],
  'Halloumiburger': ['veg', 'hot'], 'Loaded fries': ['veg', 'hot'], 'Nachos': ['veg'],
  'Sorbet': ['vegan'], 'Nøttemiks': ['vegan'],
};
const HUB_TAG_ICON = { hot: ['flame', 'Sterk', '#c8442b'], veg: ['leaf', 'Vegetar', '#3f8a4f'], vegan: ['sprout', 'Vegansk', '#2f7a3f'] };
function MenuHeading({ title, first }) {
  return <h2 style={{ margin: first ? '0 0 8px' : '32px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.015em', paddingBottom: 10, borderBottom: '3px solid var(--hub-pink)' }}>{title}</h2>;
}
function MenuItem({ it }) {
  const { Icon } = window.HUBDesignSystem_d87c4c;
  const [n, d, p, t, al, alt] = it;
  return <div style={{ display: 'flex', gap: 'clamp(10px,2vw,16px)', alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid var(--hub-cream-line)' }}>
    {HUB_MENU_NO[n] && <div style={{ width: 32, flex: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--hub-pink-deep)', fontVariantNumeric: 'tabular-nums' }}>{HUB_MENU_NO[n]}</div>}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 16 }}>{n}{(HUB_MENU_TAGS[n] || []).map(k => <span key={k} title={HUB_TAG_ICON[k][1]} style={{ display: 'inline-flex' }}><Icon name={HUB_TAG_ICON[k][0]} size={16} color={HUB_TAG_ICON[k][2]} /></span>)}</div>
      <div style={{ fontSize: 14, color: 'var(--hub-grey-700)', marginTop: 2 }}>{d}</div>
      {t && <div style={{ fontSize: 12, color: 'var(--hub-grey-600)', marginTop: 4 }}>{t}</div>}
      {alt && <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--hub-pink-deep)', marginTop: 4 }}>Kan fås: {alt.join(' · ').toLowerCase().replace(/^./, c => c.toUpperCase())}</div>}{al && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 6 }}>{al.map(a => <span key={a} style={{ fontSize: 11, fontWeight: 600, lineHeight: '18px', padding: '0 6px', border: '1px solid var(--hub-cream-line)', color: 'var(--hub-grey-700)' }}>{a}</span>)}</div>}
    </div>
    <div style={{ fontWeight: 700, fontSize: 16, whiteSpace: 'nowrap' }}>{kr(p)}</div>
  </div>;
}
function Menu({ onBook }) {
  const { Eyebrow, Tabs, Button, Icon } = window.HUBDesignSystem_d87c4c;
  const [tab, setTab] = React.useState('Mat');
  const [narrow, setNarrow] = React.useState(window.innerWidth < 768);
  React.useEffect(() => { const f = () => setNarrow(window.innerWidth < 768); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);
  const sec = HUB_MENU[tab];
  const byTitle = Object.fromEntries(sec.groups.map(g => [g.title, g]));
  const cols = (narrow ? [sec.cols.flat()] : sec.cols).map(titles => titles.flatMap((ti, gi) => [{ h: ti, first: gi === 0 }, ...byTitle[ti].items.map(it => ({ it }))]));
  return <div style={{ background: 'var(--hub-cream)', color: 'var(--hub-ink)', minHeight: 'calc(100vh - 68px)' }}>
    <section className="hub-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '56px var(--page-margin) 96px' }}>
      <Eyebrow>Mat</Eyebrow>
      <h1 style={{ margin: '8px 0 12px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,6vw,52px)', letterSpacing: 'var(--tracking-display)' }}>Mat, drikke og snacks</h1>
      <p style={{ margin: '0 0 32px', fontSize: 18, lineHeight: 1.5, color: 'var(--hub-grey-700)', maxWidth: 640 }}>Dette kan du bestille på rommet.</p>
      <Tabs items={Object.keys(HUB_MENU)} value={tab} onChange={setTab} />
      <p style={{ margin: '24px 0 8px', fontSize: 16, color: 'var(--hub-grey-700)', maxWidth: 640 }}>{sec.intro}</p>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 13, color: 'var(--hub-grey-700)' }}>{Object.values(HUB_TAG_ICON).map(([ic, l, c]) => <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name={ic} size={16} color={c} />{l}</span>)}</div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols.length},minmax(0,1fr))`, columnGap: 'clamp(32px,5vw,56px)', marginTop: 24 }}>
        {cols.map((cells, ci) => <div key={ci} style={{ minWidth: 0 }}>
          {cells.map((c, ri) => c.h ? <MenuHeading key={ri} title={c.h} first={c.first} /> : <MenuItem key={ri} it={c.it} />)}
        </div>)}
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginTop: 48 }}>
        <Button size="lg" iconRight="arrow-right" onClick={onBook}>Book rom</Button>
        <span style={{ fontSize: 14, color: 'var(--hub-grey-600)' }}>Allergener er merket på hver rett, og de fleste kan lages glutenfrie eller laktosefrie. Spør oss om du er usikker.</span>
      </div>
    </section>
  </div>;
}
window.Menu = Menu;
window.HUB_MENU = HUB_MENU;
Object.assign(window, { HUB_MENU_NO, HUB_MENU_TAGS, HUB_TAG_ICON });
