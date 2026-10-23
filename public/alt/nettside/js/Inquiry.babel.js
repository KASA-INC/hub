const HUB_INQUIRY = {
  bedrift: {
    eyebrow: 'For bedrifter', title: 'Møterom med storskjerm og mat på bordet',
    lead: 'Book et rom til kick-off, kundekveld eller teambuilding. Skjermen tar HDMI og trådløs deling, og vi serverer når det passer dere.',
    packages: [['Dagmøte', '4 timer, kaffe hele dagen og lunsj', 'fra kr 395 per person'], ['Kundekveld', 'Kamp på skjermen, pizza og to enheter drikke', 'fra kr 545 per person'], ['Hele lokalet', 'Alle tre rommene og baren, opptil 36 personer', 'pris på forespørsel']],
    fields: ['Bedrift', 'Kontaktperson', 'E-post'], cta: 'Send forespørsel',
  },
  selskap: {
    eyebrow: 'For anledningen', title: 'Bursdag, utdrikningslag eller julebord',
    lead: 'Dere får rommet for dere selv, vi ordner maten. Sett på en kamp, spill eller ta med egen playlist.',
    packages: [['Bursdag', '3 timer, pizza og brus. Kake kan bestilles', 'fra kr 295 per person'], ['Utdrikningslag', 'Rom, quiz på skjermen, bøtte med øl og snacks', 'fra kr 445 per person'], ['Julebord', 'Treretters eller pizzabuffet, drikkepakke', 'fra kr 695 per person']],
    fields: ['Navn', 'E-post', 'Telefon'], cta: 'Send forespørsel',
  },
};
function Inquiry({ kind, onKind }) {
  const { Eyebrow, Card, Input, Select, Stepper, Button, Toast, Tag } = window.HUBDesignSystem_d87c4c;
  const c = HUB_INQUIRY[kind];
  const [pkg, setPkg] = React.useState(0);
  const [guests, setGuests] = React.useState(kind === 'bedrift' ? 12 : 8);
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { setPkg(0); setSent(false); }, [kind]);
  return <div style={{ background: 'var(--hub-cream)', color: 'var(--hub-ink)', minHeight: 'calc(100vh - 68px)' }}>
    <section className="hub-sec" style={{ maxWidth: 1200, margin: '0 auto', padding: '56px var(--page-margin) 96px' }}>
      <Eyebrow>Events</Eyebrow>
      <h1 style={{ margin: '8px 0 12px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,5vw,56px)', letterSpacing: 'var(--tracking-display)', maxWidth: 820, textWrap: 'balance' }}>Book rom til arrangementet</h1>
      <p style={{ margin: '0 0 24px', fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.5, color: 'var(--hub-grey-700)', maxWidth: 640 }}>Fra bursdag og utdrikningslag til kick-off og kundekveld. Dere får rommet for dere selv, vi ordner maten.</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>{[['selskap', 'Privat selskap'], ['bedrift', 'Bedrift']].map(([k, l]) => <Tag key={k} selected={kind === k} onClick={() => onKind && onKind(k)}>{l}</Tag>)}</div>
      <p style={{ margin: '0 0 24px', fontSize: 16, lineHeight: 1.5, color: 'var(--hub-grey-700)', maxWidth: 640 }}>{c.lead}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(28px,5vw,40px)', alignItems: 'start' }}>
        <div>
          <h2 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.015em', paddingBottom: 10, borderBottom: '3px solid var(--hub-pink)' }}>Pakker</h2>
          {c.packages.map(([n, d, p], i) => <div key={n} className="hub-pkg" onClick={() => setPkg(i)} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '18px 16px', margin: '0 -16px', borderBottom: '1px solid var(--hub-cream-line)', cursor: 'pointer', background: pkg === i ? 'var(--hub-white)' : 'transparent', boxShadow: pkg === i ? 'inset 4px 0 0 var(--hub-pink)' : 'none' }}>
            <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 700, fontSize: 17 }}>{n}</div><div style={{ fontSize: 14, color: 'var(--hub-grey-700)', marginTop: 2 }}>{d}</div></div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--hub-grey-700)', textAlign: 'right' }}>{p}</div>
          </div>)}
        </div>
        <Card style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sent ? <>
            <Toast kind="success" title="Forespørselen er sendt" style={{ width: '100%' }}>Vi svarer innen én virkedag med tilbud og ledige datoer.</Toast>
            <Button variant="secondary" onClick={() => setSent(false)} style={{ alignSelf: 'flex-start' }}>Send en til</Button>
          </> : <>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '-0.015em' }}>{c.packages[pkg][0]}</h3>
            <div className="hub-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Input label="Dato" type="date" />
              <Select label="Tidspunkt" options={['Formiddag', 'Ettermiddag', 'Kveld']} />
            </div>
            <Stepper label="Antall personer" value={guests} min={2} max={36} onChange={setGuests} style={{ display: 'flex' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))', gap: 14 }}>{c.fields.map(f => <Input key={f} label={f} />)}</div>
            <Input label="Noe vi bør vite?" placeholder="Allergier, ønsker, spesielle behov" />
            <Button size="lg" iconRight="arrow-right" onClick={() => setSent(true)} style={{ alignSelf: 'stretch' }}>{c.cta}</Button>
          </>}
        </Card>
      </div>
    </section>
  </div>;
}
window.Inquiry = Inquiry;
