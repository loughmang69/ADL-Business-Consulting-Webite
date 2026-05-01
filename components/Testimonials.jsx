
// Testimonials.jsx
const Stars = ({ count = 5 }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < count ? '#d4a017' : '#e0e0e0'}>
        <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
      </svg>
    ))}
  </div>
);

const TESTIMONIALS = [
  {
    name: 'Maria T.',
    role: 'Owner, Coastal Kitchen & Catering',
    stars: 5,
    text: "Garrett restructured our business as an S-Corp and saved us thousands in self-employment taxes our first year. He explained everything clearly and made a confusing process feel manageable. We finally feel like we have a real financial partner.",
    initials: 'MT',
    color: '#1a3d6e',
  },
  {
    name: 'James R.',
    role: 'Independent Contractor, Tech Industry',
    stars: 5,
    text: "I had a mess of receipts, three different income streams, and no idea how to handle estimated taxes. Garrett cleaned everything up, set me up on QuickBooks, and got me a refund I wasn't expecting. Highly recommend for any freelancer.",
    initials: 'JR',
    color: '#225e89',
  },
  {
    name: 'Sandra & Mike L.',
    role: 'Co-owners, Bay Area Retail Shop',
    stars: 5,
    text: "We needed a new POS system and better bookkeeping. Garrett handled both — the implementation was seamless and our books have been clean ever since. He's responsive, honest, and doesn't talk down to you.",
    initials: 'SL',
    color: '#142b56',
  },
  {
    name: 'Derek N.',
    role: 'Founder, Early-Stage Startup',
    stars: 5,
    text: "As a first-time founder, I had no idea what entity to form or how to set up payroll. Garrett walked me through every decision, set up our whole back office, and even helped us evaluate a few AI tools. Worth every penny.",
    initials: 'DN',
    color: '#1a527a',
  },
];

const Testimonials = ({ tweaks }) => {
  const accent = tweaks?.accentColor || '#67cbea';

  return (
    <section id="testimonials" data-screen-label="Testimonials" style={{
      background: 'linear-gradient(180deg, #f0f5fa 0%, #f7f9fc 100%)',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#1a6a8a', marginBottom: 12,
          }}>Client Testimonials</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            color: '#0d1f3c', letterSpacing: '-0.03em', marginBottom: 16,
            textWrap: 'balance',
          }}>Trusted by Small Businesses<br/>Across the Bay Area</h2>
          <p style={{
            fontSize: 17, color: '#5a6a82', lineHeight: 1.6,
            maxWidth: 480, margin: '0 auto',
          }}>Real results from real clients. Here's what they have to say.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 20,
              padding: '32px 28px',
              boxShadow: '0 2px 20px rgba(20,43,86,0.07)',
              border: '1px solid rgba(20,43,86,0.07)',
              display: 'flex', flexDirection: 'column', gap: 20,
              transition: 'box-shadow 0.22s, transform 0.22s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(26,61,110,0.13)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 20px rgba(20,43,86,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: 48, lineHeight: 1, color: accent, fontFamily: 'Georgia, serif', marginBottom: -12 }}>"</div>

              <p style={{
                fontSize: 15.5, lineHeight: 1.7, color: '#3a4a5e',
                fontStyle: 'normal', flex: 1,
                textWrap: 'pretty',
              }}>{t.text}</p>

              <div>
                <Stars count={t.stars} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 16, borderTop: '1px solid rgba(20,43,86,0.08)' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 14, fontWeight: 800, flexShrink: 0,
                  letterSpacing: '0.02em',
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#0d1f3c' }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: '#7a8a9e', marginTop: 1 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Testimonials, Stars });
