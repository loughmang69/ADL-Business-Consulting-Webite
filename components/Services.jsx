
// Services.jsx
const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 15v10M15 20h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Entity Structure Review',
    tag: 'Tax Strategy',
    desc: 'Determine the optimal business structure — LLC, S-Corp, C-Corp — from a tax efficiency standpoint. Avoid costly mistakes before they happen.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14l4 4 5-6 5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Accounting & Bookkeeping',
    tag: 'Accounting',
    desc: 'Keep your books clean, accurate, and audit-ready. Monthly reconciliation, categorization, and financial reporting tailored to your business.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 4h12a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 10h8M10 14h8M10 18h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tax Return Review',
    tag: 'Tax',
    desc: 'Comprehensive review of your business and personal tax returns to ensure accuracy, maximize deductions, and minimize your tax liability.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 20l2-2M19 20l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Payroll Implementation',
    tag: 'Operations',
    desc: 'Select, configure, and launch the right payroll provider for your team size and structure — and stay compliant with California payroll regulations.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 10h20" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 15h2M13 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Technology Implementations',
    tag: 'Tech',
    desc: 'QuickBooks setup, point-of-sale systems, and other small business tools — configured correctly from day one so you get the data you actually need.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22V12M10 22V8M14 22V14M18 22V6M22 22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Business Process Optimization',
    tag: 'Consulting',
    desc: 'Identify inefficiencies, reduce operational costs, and build scalable workflows — from back-office finance to customer-facing processes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 6l2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Personal Finance Education',
    tag: 'Education',
    desc: 'Practical guidance on budgeting, debt management, retirement planning, and building wealth — designed for individuals and small business owners.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 22h12M14 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 9l2 2 6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Website & App Development',
    tag: 'Tech',
    desc: 'Modern, responsive websites and web apps for your business — built and maintained so your online presence is always working for you.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="9" cy="14" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="19" cy="9" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 14l4-3M12 14l4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Agent Implementation',
    tag: 'Innovation',
    desc: 'Deploy AI-powered tools and automations tailored to your workflows — from customer service bots to intelligent financial reporting assistants.',
  },
];

const TAG_COLORS = {
  'Tax Strategy': { bg: 'rgba(20,43,86,0.08)', color: '#142b56' },
  'Tax': { bg: 'rgba(20,43,86,0.08)', color: '#142b56' },
  'Accounting': { bg: 'rgba(26,61,110,0.1)', color: '#1a3d6e' },
  'Operations': { bg: 'rgba(34,78,115,0.1)', color: '#1a527a' },
  'Tech': { bg: 'rgba(103,203,234,0.15)', color: '#1a6a8a' },
  'Consulting': { bg: 'rgba(26,61,110,0.1)', color: '#1a3d6e' },
  'Education': { bg: 'rgba(184,160,80,0.12)', color: '#7a6030' },
  'Innovation': { bg: 'rgba(103,203,234,0.18)', color: '#0e5a7a' },
};

const Services = ({ tweaks }) => {
  const accent = tweaks?.accentColor || '#67cbea';
  const [hovered, setHovered] = React.useState(null);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="services" data-screen-label="Services" style={{
      background: '#f7f9fc', padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-block', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: accent === '#67cbea' ? '#1a6a8a' : accent,
            marginBottom: 12,
          }}>What We Do</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            color: '#0d1f3c', letterSpacing: '-0.03em', marginBottom: 16,
            textWrap: 'balance',
          }}>Everything Your Business Needs,<br/>Under One Roof</h2>
          <p style={{
            fontSize: 18, color: '#5a6a82', lineHeight: 1.6,
            maxWidth: 560, margin: '0 auto', textWrap: 'pretty',
          }}>From tax strategy to AI automation — we bring big-firm expertise to your small business at a personal, approachable scale.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {SERVICES.map((svc, i) => {
            const tagStyle = TAG_COLORS[svc.tag] || TAG_COLORS['Consulting'];
            const isHovered = hovered === i;
            return (
              <div key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: '28px 28px 24px',
                  border: isHovered ? `1.5px solid ${accent}` : '1.5px solid rgba(20,43,86,0.08)',
                  boxShadow: isHovered ? `0 8px 40px rgba(26,61,110,0.12)` : '0 2px 12px rgba(20,43,86,0.05)',
                  transition: 'all 0.22s ease',
                  transform: isHovered ? 'translateY(-3px)' : 'none',
                  cursor: 'default',
                  display: 'flex', flexDirection: 'column', gap: 14,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: isHovered ? `rgba(103,203,234,0.15)` : 'rgba(26,61,110,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: isHovered ? '#1a6a8a' : '#1a3d6e',
                    transition: 'all 0.22s',
                    flexShrink: 0,
                  }}>{svc.icon}</div>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100,
                    background: tagStyle.bg, color: tagStyle.color,
                  }}>{svc.tag}</span>
                </div>

                <div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 700, color: '#0d1f3c',
                    marginBottom: 8, letterSpacing: '-0.02em', lineHeight: 1.3,
                  }}>{svc.title}</h3>
                  <p style={{
                    fontSize: 14.5, color: '#5a6a82', lineHeight: 1.65,
                    textWrap: 'pretty',
                  }}>{svc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ color: '#5a6a82', fontSize: 15, marginBottom: 20 }}>
            Not sure which services fit your situation? Let's talk it through.
          </p>
          <a href="#contact" onClick={scrollToContact} style={{
            display: 'inline-block', padding: '14px 36px', borderRadius: 100,
            background: '#1a3d6e', color: '#fff', fontWeight: 700, fontSize: 15,
            textDecoration: 'none', letterSpacing: '-0.01em',
            transition: 'background 0.2s, transform 0.15s',
            boxShadow: '0 4px 20px rgba(26,61,110,0.25)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#142b56'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1a3d6e'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >Request a Free Consultation</a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Services });
