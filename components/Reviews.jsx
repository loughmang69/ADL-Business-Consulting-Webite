
// Reviews.jsx — Google Reviews scaffold
// TODO: Replace GOOGLE_PLACE_ID with your actual Google Business Profile Place ID
// once your Google Business Profile is live. Find it at:
// https://developers.google.com/maps/documentation/javascript/place-id
// Example Place ID format: ChIJN1t_tDeuEmsRUsoyG83frY4
const GOOGLE_PLACE_ID = 'YOUR_PLACE_ID_HERE'; // <-- INSERT PLACE ID HERE
const GOOGLE_PROFILE_URL = 'https://g.page/r/YOUR_PLACE_ID_HERE/review'; // <-- UPDATE WITH REAL URL

const Reviews = ({ tweaks }) => {
  const accent = tweaks?.accentColor || '#67cbea';

  return (
    <section id="reviews" data-screen-label="Google Reviews" style={{
      background: '#fff', padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#1a6a8a', marginBottom: 12,
        }}>Google Reviews</div>

        <h2 style={{
          fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
          color: '#0d1f3c', letterSpacing: '-0.03em', marginBottom: 16,
        }}>See What Our Clients Say on Google</h2>

        <p style={{
          fontSize: 17, color: '#5a6a82', lineHeight: 1.6,
          maxWidth: 520, margin: '0 auto 48px',
        }}>
          We're just getting started, but our clients' trust means everything. Check our growing review profile on Google.
        </p>

        {/* Google Reviews Widget Placeholder */}
        {/* ============================================================
            GOOGLE REVIEWS INTEGRATION
            ============================================================
            Once your Google Business Profile is live:
            1. Replace GOOGLE_PLACE_ID above with your real Place ID
            2. Update GOOGLE_PROFILE_URL with your real Google Business URL
            3. Optionally embed the Google Reviews widget using:
               - Elfsight Google Reviews widget (elfsight.com) — easiest
               - Google Places API (requires billing account + API key)
               - A third-party review aggregator like Birdeye or Podium
            ============================================================ */}

        <div style={{
          border: '2px dashed rgba(26,61,110,0.15)', borderRadius: 20,
          padding: '48px 32px', marginBottom: 40,
          background: 'rgba(247,249,252,0.8)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
        }}>
          {/* Google G logo */}
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="28" fill="#fff" stroke="rgba(26,61,110,0.1)" strokeWidth="1.5"/>
            <path d="M44.5 28.5c0-1.04-.09-2.04-.26-3H28v5.67h9.26a7.92 7.92 0 01-3.44 5.2v4.32h5.57c3.26-3 5.11-7.43 5.11-12.19z" fill="#4285F4"/>
            <path d="M28 45c4.64 0 8.54-1.54 11.39-4.17l-5.57-4.32c-1.54 1.04-3.51 1.65-5.82 1.65-4.48 0-8.27-3.02-9.62-7.09H12.6v4.46A17 17 0 0028 45z" fill="#34A853"/>
            <path d="M18.38 31.07A10.2 10.2 0 0117.85 28c0-1.06.18-2.09.53-3.07v-4.46H12.6A17 17 0 0011 28c0 2.74.66 5.34 1.6 7.53l5.78-4.46z" fill="#FBBC05"/>
            <path d="M28 17.84c2.52 0 4.78.87 6.56 2.57l4.92-4.92C36.53 12.73 32.64 11 28 11A17 17 0 0012.6 20.47l5.78 4.46C19.73 20.86 23.52 17.84 28 17.84z" fill="#EA4335"/>
          </svg>

          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#0d1f3c', marginBottom: 6 }}>
              Google Reviews Widget
            </div>
            <div style={{ fontSize: 14, color: '#7a8a9e', maxWidth: 380, lineHeight: 1.6 }}>
              Your Google Business Profile is being set up. Once live, this section will display your Google reviews automatically.
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(26,61,110,0.06)', borderRadius: 100,
            padding: '8px 18px', fontSize: 13, color: '#5a6a82', fontWeight: 500,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#5a6a82" strokeWidth="1.5"/>
              <path d="M7 4.5v3l2 1.5" stroke="#5a6a82" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Coming soon — Place ID needed
          </div>
        </div>

        {/* CTA to Google Profile */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '13px 28px', borderRadius: 100,
              background: '#1a3d6e', color: '#fff',
              fontWeight: 700, fontSize: 15, textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
              boxShadow: '0 4px 18px rgba(26,61,110,0.2)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#142b56'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1a3d6e'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1l2 5.5H17l-4.9 3.6L13.8 17 9 13.4 4.2 17l1.7-6.9L1 6.5h6z" fill="currentColor"/>
            </svg>
            Leave Us a Review
          </a>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 100,
              background: 'transparent', color: '#1a3d6e',
              fontWeight: 600, fontSize: 15, textDecoration: 'none',
              border: '1.5px solid rgba(26,61,110,0.25)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a3d6e'; e.currentTarget.style.background = 'rgba(26,61,110,0.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,61,110,0.25)'; e.currentTarget.style.background = 'transparent'; }}
          >
            View Google Profile
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Reviews });
