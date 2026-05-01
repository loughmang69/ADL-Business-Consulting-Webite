
// Footer.jsx
const Footer = ({ tweaks }) => {
  const accent = tweaks?.accentColor || '#67cbea';
  const year = 2026;

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#0a172e',
      padding: '64px 24px 32px',
      color: 'rgba(255,255,255,0.6)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48, marginBottom: 56,
        }}>
          {/* Brand col */}
          <div>
            <img src="uploads/logo.jpg" alt="ADL Business Consulting" style={{ height: 52, width: 'auto', borderRadius: 8, marginBottom: 20 }}/>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 260, textWrap: 'pretty' }}>
              CPA-led business consulting for small businesses and individuals across the Bay Area.
            </p>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 20, color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none', fontSize: 14, fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = accent}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              {/* LinkedIn icon */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                <path d="M2 1a1 1 0 100 2 1 1 0 000-2zM1 5h2v10H1V5zm4 0h2v1.4C7.5 5.5 8.5 5 9.5 5c2.2 0 3.5 1.5 3.5 3.7V15h-2V9.2c0-1.2-.6-1.9-1.6-1.9-1.1 0-1.7.8-1.7 1.9V15H5V5z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Services col */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Entity Structure', 'Accounting & Bookkeeping', 'Tax Return Review', 'Payroll Implementation', 'Technology Setup', 'Process Optimization'].map(s => (
                <a key={s} href="#services" onClick={(e) => scrollTo(e, '#services')} style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Phone</div>
                <a href="tel:5103202724" style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}>510-320-2724</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Email</div>
                <a href="mailto:garrett.loughman@adlbusinessconsulting.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', wordBreak: 'break-all' }}>garrett.loughman@<br/>adlbusinessconsulting.com</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Location</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Fremont, California</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 13 }}>
            © {year} ADL Business Consulting, PC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map(l => (
              <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)} style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
