
// Hero.jsx — Full-bleed hero section
const Hero = ({ tweaks }) => {
  const accent = tweaks?.accentColor || '#67cbea';

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" data-screen-label="Hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3d6e 45%, #1e527a 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '120px 24px 80px',
    }}>
      {/* Subtle circuit pattern overlay */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M20 0 L20 20 L0 20" fill="none" stroke="#67cbea" strokeWidth="1"/>
            <path d="M60 0 L60 40 L80 40" fill="none" stroke="#67cbea" strokeWidth="1"/>
            <path d="M0 60 L40 60 L40 80" fill="none" stroke="#67cbea" strokeWidth="1"/>
            <circle cx="20" cy="20" r="2.5" fill="#67cbea"/>
            <circle cx="60" cy="40" r="2.5" fill="#67cbea"/>
            <circle cx="40" cy="60" r="2.5" fill="#67cbea"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '8%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(103,203,234,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}></div>
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,94,137,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, textAlign: 'center' }}>
        {/* Pill badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(103,203,234,0.15)', border: '1px solid rgba(103,203,234,0.3)',
          borderRadius: 100, padding: '6px 16px', marginBottom: 32,
          fontSize: 13, fontWeight: 600, color: accent,
          letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, display: 'inline-block' }}></span>
          Fremont, California · CPA Licensed Since 2013
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 68px)',
          fontWeight: 800, lineHeight: 1.1,
          color: '#fff', marginBottom: 24,
          letterSpacing: '-0.03em',
          textWrap: 'balance',
        }}>
          {tweaks?.heroTagline ? (
            <span style={{
              background: `linear-gradient(90deg, #fff 40%, ${accent})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{tweaks.heroTagline}</span>
          ) : (
            <>
              Your Business Deserves<br/>
              <span style={{
                background: `linear-gradient(90deg, ${accent}, #a8e8f5)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Expert Financial Guidance</span>
            </>
          )}
        </h1>

        <p style={{
          fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.65,
          color: 'rgba(255,255,255,0.72)', marginBottom: 44,
          maxWidth: 620, margin: '0 auto 44px',
          textWrap: 'pretty',
        }}>
          ADL Business Consulting pairs deep CPA expertise with hands-on business consulting — so you spend less time on financials and more time growing what you built.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" onClick={scrollToContact} style={{
            padding: '16px 36px', borderRadius: 100,
            background: accent, color: '#142b56',
            fontWeight: 800, fontSize: 16, textDecoration: 'none',
            letterSpacing: '-0.01em',
            boxShadow: `0 4px 28px rgba(103,203,234,0.4)`,
            transition: 'transform 0.15s, box-shadow 0.15s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(103,203,234,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 28px rgba(103,203,234,0.4)'; }}
          >Request a Free Consultation</a>

          <a href="#services" onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#services');
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
          }} style={{
            padding: '16px 36px', borderRadius: 100,
            background: 'rgba(255,255,255,0.1)', color: '#fff',
            fontWeight: 600, fontSize: 16, textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.25)',
            letterSpacing: '-0.01em',
            transition: 'background 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
          >View Services</a>
        </div>

        {/* Trust bar */}
        <div style={{
          marginTop: 72, display: 'flex', gap: 40, justifyContent: 'center',
          flexWrap: 'wrap', alignItems: 'center',
        }}>
          {[
            { num: '15+', label: 'Years Experience' },
            { num: 'CPA', label: 'CA License #150109' },
            { num: '9', label: 'Service Areas' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: accent, letterSpacing: '-0.03em' }}>{item.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 2, letterSpacing: '0.02em' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
