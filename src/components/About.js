import aboutImg1 from '../assets/WhatsApp Image 2026-01-28 at 11.02.19 PM (1).jpeg';
import aboutImg2 from '../assets/cutpic.jpeg';

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row" style={{ alignItems: 'center', marginBottom: '6rem' }}>
          <div className="col col-6 animate-up">
            <h2 className="main-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>ABOUT <span>US</span></h2>
            <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              Welcome to <strong>Prakash Amusements</strong>. With over <strong>20 years</strong> of
              mastering the art of fun, we have become a cornerstone in the amusement
              and ride rental industry. Our journey began with a simple vision: to bring world-class
              thrills and safe ride experiences to your doorstep.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: '1.8', marginTop: '1rem' }}>
              From massive ferris wheels to engaging carnival games, our dedicated team ensures every ride
              is perfectly maintained, allowing you to focus on the fun while we handle the safety.
            </p>
          </div>
          <div className="col col-6 animate-up" style={{ animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', padding: '1rem' }}>
              <img
                src={aboutImg1}
                alt="Event Management"
                style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--card-shadow)' }}
              />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2px solid var(--primary)', borderRadius: '20px', transform: 'translate(-15px, 15px)', zIndex: -1 }}></div>
            </div>
          </div>
        </div>

        <div className="row" style={{ alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div className="col col-6 animate-up">
            <h2 className="main-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>OUR <span>BUSINESS</span></h2>
            <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              Prakash Amusements is not just a provider; it's a legacy of fun. We specialize in
              providing high-end amusement rides and interactive game solutions that
              cater to all age groups and occasions.
            </p>
            <div className="glass" style={{ padding: '2rem', marginTop: '2rem', borderRadius: '15px' }}>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Our Specialties</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Premium Ride Rentals', 'Interactive Carnival Games', 'Safety-First Management', 'Professional Operators'].map((item, idx) => (
                  <li key={idx} style={{ padding: '0.5rem 0', color: 'var(--gray)', display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col col-6 animate-up" style={{ animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', padding: '1rem' }}>
              <img
                src={aboutImg2}
                alt="Amusement Business"
                style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--card-shadow)' }}
              />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', border: '2px solid var(--primary)', borderRadius: '20px', transform: 'translate(15px, 15px)', zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
