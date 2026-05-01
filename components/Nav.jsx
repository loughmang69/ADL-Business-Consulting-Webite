
// Nav.jsx — Sticky navigation bar
const Nav = ({ tweaks }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 24px rgba(20,43,86,0.10)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(20,43,86,0.08)' : 'none',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72,
      }}>
        <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="uploads/logo.jpg" alt="ADL Business Consulting" style={{ height: 44, width: 'auto', borderRadius: 6 }} />
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)} style={{
              padding: '8px 14px', borderRadius: 8, fontSize: 15, fontWeight: 500,
              color: scrolled ? '#1a3d6e' : '#fff',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = scrolled ? 'rgba(26,61,110,0.08)' : 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >{l.label}</a>
          ))}
          <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} style={{
            marginLeft: 8, padding: '9px 20px', borderRadius: 100,
            background: tweaks?.accentColor || '#67cbea',
            color: '#142b56', fontWeight: 700, fontSize: 14,
            textDecoration: 'none', letterSpacing: '-0.01em',
            transition: 'transform 0.15s, box-shadow 0.15s',
            boxShadow: '0 2px 12px rgba(103,203,234,0.35)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(103,203,234,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(103,203,234,0.35)'; }}
          >Free Consultation</a>
        </div>

        {/* Mobile hamburger */}
        <button className="nav-mobile" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: 5, padding: 8,
        }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: scrolled ? '#1a3d6e' : '#fff',
              borderRadius: 2, transition: 'all 0.3s',
              transform: menuOpen && i === 0 ? 'translateY(7px) rotate(45deg)' :
                         menuOpen && i === 2 ? 'translateY(-7px) rotate(-45deg)' :
                         menuOpen && i === 1 ? 'scaleX(0)' : 'none',
            }}></span>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#fff', borderTop: '1px solid rgba(20,43,86,0.08)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }} className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)} style={{
              padding: '12px 16px', borderRadius: 8, fontSize: 16, fontWeight: 500,
              color: '#1a3d6e', textDecoration: 'none',
            }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} style={{
            marginTop: 8, padding: '12px 20px', borderRadius: 100,
            background: '#67cbea', color: '#142b56', fontWeight: 700,
            fontSize: 15, textDecoration: 'none', textAlign: 'center',
          }}>Free Consultation</a>
        </div>
      )}
    </nav>
  );
};

Object.assign(window, { Nav });
