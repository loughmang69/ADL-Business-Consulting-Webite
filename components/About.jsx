
// About.jsx
const About = ({ tweaks }) => {
  const accent = tweaks?.accentColor || '#67cbea';

  return (
    <section id="about" data-screen-label="About" style={{
      background: '#fff', padding: '100px 24px',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 72, alignItems: 'center',
      }}>
        {/* Photo column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -8, borderRadius: 28,
              background: `linear-gradient(135deg, #1a3d6e, ${accent})`,
              zIndex: 0,
            }}></div>
            <img
              src="uploads/headshot.jpg"
              alt="Garrett Loughman, CPA, MBA"
              style={{
                position: 'relative', zIndex: 1,
                width: '100%', maxWidth: 360,
                borderRadius: 22,
                display: 'block',
                objectFit: 'cover',
                aspectRatio: '4/5',
              }}
            />
            {/* CPA badge */}
            <div style={{
              position: 'absolute', zIndex: 2,
              bottom: -16, right: -16,
              background: '#1a3d6e', color: '#fff',
              borderRadius: 14, padding: '14px 18px',
              boxShadow: '0 8px 32px rgba(20,43,86,0.25)',
              textAlign: 'center', border: '3px solid #fff',
            }}>
              <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em', color: accent }}>CPA</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>CA #150109</div>
            </div>
          </div>

          {/* Quick credentials */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 360 }}>
            {['Licensed Since 2013', 'Fremont, CA', 'Founded May 2026'].map(tag => (
              <span key={tag} style={{
                fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100,
                background: 'rgba(26,61,110,0.07)', color: '#1a3d6e',
                letterSpacing: '0.02em',
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Text column */}
        <div>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#1a6a8a', marginBottom: 12,
          }}>Meet Your Advisor</div>

          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800,
            color: '#0d1f3c', letterSpacing: '-0.03em', marginBottom: 24,
            lineHeight: 1.15,
          }}>Garrett Loughman, CPA</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3a4a5e' }}>
              With over 15 years of experience spanning accounting, finance, consulting, finance transformation, and both internal and external audit, Garrett brings the full spectrum of financial expertise to every client engagement.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3a4a5e' }}>
              Licensed as a California CPA since 2013, Garrett spent his career in corporate and advisory roles before founding ADL Business Consulting, PC in May 2026 — driven by a desire to bring that same big-firm quality directly to small business owners and individuals who deserve it most.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3a4a5e' }}>
              Whether you're structuring a new entity, wrestling with payroll, or simply want a trusted advisor who can explain your financials in plain English — Garrett is the kind of CPA who picks up the phone.
            </p>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24, marginTop: 40,
            padding: '28px 0', borderTop: '1px solid rgba(20,43,86,0.1)',
          }}>
            {[
              { value: '15+', label: 'Years in Finance' },
              { value: '2013', label: 'CPA Licensed' },
              { value: '9', label: 'Service Areas' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#1a3d6e', letterSpacing: '-0.04em' }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: '#7a8a9e', fontWeight: 500, marginTop: 3 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div style={{
            marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {[
              { icon: '📞', text: '510-320-2724', href: 'tel:5103202724' },
              { icon: '✉', text: 'garrett.loughman@adlbusinessconsulting.com', href: 'mailto:garrett.loughman@adlbusinessconsulting.com' },
            ].map(item => (
              <a key={item.text} href={item.href} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 15, color: '#1a3d6e', fontWeight: 500, textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#1a6a8a'}
              onMouseLeave={e => e.currentTarget.style.color = '#1a3d6e'}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { About });
