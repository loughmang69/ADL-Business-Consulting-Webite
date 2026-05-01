
// ConsultationForm.jsx — Netlify Forms integrated
const ConsultationForm = ({ tweaks }) => {
  const accent = tweaks?.accentColor || '#67cbea';
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', businessType: '',
    helpWith: '', contactMethod: 'Email',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [focused, setFocused] = React.useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Your name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'A valid email is required.';
    return e;
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);

    // Netlify Forms submission
    try {
      const body = new URLSearchParams({
        'form-name': 'consultation',
        'name': form.name,
        'email': form.email,
        'phone': form.phone,
        'business-type': form.businessType,
        'help-with': form.helpWith,
        'contact-method': form.contactMethod,
      });
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch (err) {
      // Fallback: still show success in prototype/preview
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '14px 16px', borderRadius: 10,
    border: `1.5px solid ${focused === field ? '#1a3d6e' : errors[field] ? '#e05a5a' : 'rgba(20,43,86,0.18)'}`,
    fontSize: 15, color: '#0d1f3c', background: '#fff',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    boxShadow: focused === field ? '0 0 0 3px rgba(26,61,110,0.08)' : 'none',
    fontFamily: 'inherit',
  });

  const labelStyle = {
    display: 'block', fontSize: 13.5, fontWeight: 600,
    color: '#3a4a5e', marginBottom: 7, letterSpacing: '-0.01em',
  };

  if (submitted) {
    return (
      <section id="contact" data-screen-label="Contact Form" style={{
        background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3d6e 100%)',
        padding: '100px 24px',
      }}>
        <div style={{
          maxWidth: 560, margin: '0 auto', textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'rgba(103,203,234,0.2)', border: `2px solid ${accent}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M8 18l7 7L28 11" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
            You're All Set!
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 440 }}>
            Thanks for reaching out. Garrett will be in touch within one business day to schedule your free consultation.
          </p>
          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8,
          }}>
            <a href="tel:5103202724" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', borderRadius: 100,
              background: accent, color: '#142b56', fontWeight: 700, fontSize: 15,
              textDecoration: 'none',
            }}>📞 510-320-2724</a>
            <button onClick={() => setSubmitted(false)} style={{
              padding: '12px 24px', borderRadius: 100,
              background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600,
              fontSize: 15, border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
              fontFamily: 'inherit',
            }}>Submit Another</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" data-screen-label="Contact Form" style={{
      background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3d6e 100%)',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'start' }}>

        {/* Left: value prop */}
        <div style={{ color: '#fff' }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: accent, marginBottom: 12,
          }}>Free Consultation</div>
          <h2 style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
            letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15,
          }}>Let's Talk About Your Business</h2>
          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, textWrap: 'pretty',
          }}>
            There's no obligation and no sales pitch. Just an honest conversation about where you are, where you want to go, and how we can help.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: '✓', text: 'No-cost, no-commitment consultation' },
              { icon: '✓', text: 'Response within one business day' },
              { icon: '✓', text: 'Available by phone, video, or email' },
              { icon: '✓', text: 'Fremont, CA and surrounding Bay Area' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(103,203,234,0.18)', border: `1px solid ${accent}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: accent,
                }}>{item.icon}</div>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 12, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Or reach out directly</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="tel:5103202724" style={{ color: accent, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>📞 510-320-2724</a>
              <a href="mailto:garrett.loughman@adlbusinessconsulting.com" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, textDecoration: 'none' }}>✉ garrett.loughman@adlbusinessconsulting.com</a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div style={{
          background: '#fff', borderRadius: 20,
          padding: '40px 36px',
          boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
        }}>
          {/* Hidden Netlify form detection */}
          <form name="consultation" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <input type="tel" name="phone"/>
            <input type="text" name="business-type"/>
            <input type="text" name="help-with"/>
            <input type="text" name="contact-method"/>
          </form>

          <h3 style={{
            fontSize: 22, fontWeight: 800, color: '#0d1f3c',
            letterSpacing: '-0.03em', marginBottom: 28,
          }}>Request My Free Consultation</h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Honeypot */}
            <input type="hidden" name="form-name" value="consultation"/>
            <p style={{ display: 'none' }}><input name="bot-field"/></p>

            {/* Name */}
            <div>
              <label style={labelStyle}>Full Name <span style={{ color: '#e05a5a' }}>*</span></label>
              <input
                type="text" name="name" value={form.name} autoComplete="name"
                onChange={e => handleChange('name', e.target.value)}
                onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                placeholder="Jane Smith"
                style={inputStyle('name')}
              />
              {errors.name && <div style={{ fontSize: 12, color: '#e05a5a', marginTop: 5 }}>{errors.name}</div>}
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email Address <span style={{ color: '#e05a5a' }}>*</span></label>
              <input
                type="email" name="email" value={form.email} autoComplete="email"
                onChange={e => handleChange('email', e.target.value)}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                placeholder="jane@yourbusiness.com"
                style={inputStyle('email')}
              />
              {errors.email && <div style={{ fontSize: 12, color: '#e05a5a', marginTop: 5 }}>{errors.email}</div>}
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>Phone Number <span style={{ color: '#7a8a9e', fontWeight: 400 }}>(optional)</span></label>
              <input
                type="tel" name="phone" value={form.phone} autoComplete="tel"
                onChange={e => handleChange('phone', e.target.value)}
                onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                placeholder="(510) 555-0100"
                style={inputStyle('phone')}
              />
            </div>

            {/* Business Type */}
            <div>
              <label style={labelStyle}>Business Type or Industry <span style={{ color: '#7a8a9e', fontWeight: 400 }}>(optional)</span></label>
              <input
                type="text" name="business-type" value={form.businessType}
                onChange={e => handleChange('businessType', e.target.value)}
                onFocus={() => setFocused('businessType')} onBlur={() => setFocused(null)}
                placeholder="e.g. Restaurant, Freelancer, Retail"
                style={inputStyle('businessType')}
              />
            </div>

            {/* Help with */}
            <div>
              <label style={labelStyle}>What can we help you with?</label>
              <select
                name="help-with" value={form.helpWith}
                onChange={e => handleChange('helpWith', e.target.value)}
                onFocus={() => setFocused('helpWith')} onBlur={() => setFocused(null)}
                style={{ ...inputStyle('helpWith'), cursor: 'pointer', appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a6a82' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center',
                  paddingRight: 44,
                }}
              >
                <option value="">Select a topic…</option>
                <option value="Entity Structure">Entity Structure Review</option>
                <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                <option value="Tax Return Review">Tax Return Review</option>
                <option value="Payroll Implementation">Payroll Implementation</option>
                <option value="Technology (QuickBooks / POS)">Technology (QuickBooks / POS)</option>
                <option value="Business Process Optimization">Business Process Optimization</option>
                <option value="Personal Finance Education">Personal Finance Education</option>
                <option value="Website / App Development">Website / App Development</option>
                <option value="AI Agent Implementation">AI Agent Implementation</option>
                <option value="Not Sure / General Inquiry">Not Sure / General Inquiry</option>
              </select>
            </div>

            {/* Preferred contact */}
            <div>
              <label style={labelStyle}>Preferred Contact Method</label>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Email', 'Phone'].map(method => (
                  <button
                    key={method} type="button"
                    onClick={() => handleChange('contactMethod', method)}
                    style={{
                      flex: 1, padding: '12px 16px', borderRadius: 10, cursor: 'pointer',
                      border: `1.5px solid ${form.contactMethod === method ? '#1a3d6e' : 'rgba(20,43,86,0.18)'}`,
                      background: form.contactMethod === method ? 'rgba(26,61,110,0.07)' : '#fff',
                      color: form.contactMethod === method ? '#1a3d6e' : '#5a6a82',
                      fontWeight: 600, fontSize: 14, transition: 'all 0.2s',
                      fontFamily: 'inherit',
                    }}
                  >{method}</button>
                ))}
              </div>
            </div>

            <button
              type="submit" disabled={submitting}
              style={{
                marginTop: 4, padding: '16px 28px', borderRadius: 100,
                background: submitting ? '#7a9ab8' : '#1a3d6e',
                color: '#fff', fontWeight: 800, fontSize: 16,
                border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                letterSpacing: '-0.01em', fontFamily: 'inherit',
                transition: 'background 0.2s, transform 0.15s',
                boxShadow: '0 4px 24px rgba(26,61,110,0.3)',
              }}
              onMouseEnter={e => { if (!submitting) { e.currentTarget.style.background = '#142b56'; e.currentTarget.style.transform = 'translateY(-2px)'; }}}
              onMouseLeave={e => { e.currentTarget.style.background = submitting ? '#7a9ab8' : '#1a3d6e'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {submitting ? 'Sending…' : 'Request My Free Consultation'}
            </button>

            <p style={{ fontSize: 12, color: '#9aabb8', textAlign: 'center', lineHeight: 1.5 }}>
              By submitting, you agree to be contacted by ADL Business Consulting, PC. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ConsultationForm });
