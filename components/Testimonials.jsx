
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
    name: 'Valerie L.',
    role: 'Owner — Excel Cleaning, LLC',
    stars: 5,
    text: "Before ADL, I was running Excel Cleaning as a sole proprietor with no real structure, no back office, and no clear picture of my finances. Garrett completely transformed my business from the ground up — forming my LLC, building out my accounting and bookkeeping, handling my taxes, redesigning my branding, and continuously finding ways to save me money. I genuinely don't know where my business would be without him.",
    initials: 'VL',
    color: '#1a3d6e',
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {/* Real testimonial cards */}
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

          {/* Submit-a-testimonial CTA card */}
          <div style={{
            borderRadius: 20,
            padding: '32px 28px',
            border: '2px dashed rgba(26,61,110,0.18)',
            background: 'rgba(247,249,252,0.7)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20,
            transition: 'border-color 0.22s, transform 0.22s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(26,61,110,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,61,110,0.18)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {/* Envelope icon */}
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: 'rgba(26,61,110,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="5" width="18" height="13" rx="2" stroke="#1a3d6e" strokeWidth="1.7"/>
                <path d="M2 8l9 6 9-6" stroke="#1a3d6e" strokeWidth="1.7" strokeLinecap="round"/>
              </svg>
            </div>

            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#0d1f3c', marginBottom: 10, lineHeight: 1.3 }}>
                Share Your Experience
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: '#5a6a82', textWrap: 'pretty' }}>
                Did ADL Business Consulting help you and your business in a meaningful way? We'd love to hear from you.
              </p>
            </div>

            <a
              href="mailto:info@adlbusinessconsulting.com?subject=Client%20Testimonial"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '11px 22px', borderRadius: 100,
                background: '#1a3d6e', color: '#fff',
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
                alignSelf: 'flex-start',
                transition: 'background 0.2s, transform 0.15s',
                boxShadow: '0 4px 14px rgba(26,61,110,0.18)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#142b56'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1a3d6e'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <rect x="1" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M1 6l6.5 4.5L14 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              info@adlbusinessconsulting.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Testimonials, Stars });
