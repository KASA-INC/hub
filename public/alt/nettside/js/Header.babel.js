function Header({ view, onNav, onLogin }) {
  const { Button } = window.HUBDesignSystem_d87c4c;
  const links = [['Storskjerm', 'sport'], ['Gaming', 'gaming'], ['Mat', 'menu'], ['Rom', 'roomsInfo'], ['Events', 'selskap']];
  const cur = view === 'bedrift' ? 'selskap' : view;
  return <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--hub-ink)', borderBottom: '1px solid var(--hub-ink-3)' }}>
    <div className="hub-hdr" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--page-margin)', height: 68, display: 'flex', alignItems: 'center', gap: 32 }}>
      <img src="assets/logo/hub-logo-pink.svg" alt="HUB" onClick={() => onNav('home')} style={{ height: 30, cursor: 'pointer' }} />
      <nav className="hub-nav" style={{ display: 'flex', gap: 24, flex: 1, fontSize: 15, fontWeight: 500, overflowX: 'auto' }}>
        {links.map(([l, v]) => <a key={v} onClick={() => onNav(v)} style={{ color: cur === v ? 'var(--hub-cream)' : 'var(--hub-grey-300)', textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: cur === v ? '0 2px 0 var(--hub-pink)' : 'none', paddingBottom: 2 }}>{l}</a>)}
      </nav>
      <div style={{ display: 'flex', gap: 8, flex: 'none' }}><Button size="sm" onClick={() => onNav('book')}>Book</Button><Button size="sm" variant="secondary" tone="dark" onClick={onLogin}>Logg inn</Button></div>
    </div>
  </header>;
}
window.Header = Header;
