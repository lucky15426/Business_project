import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col animate-up">
            <Link to="hero" spy={true} smooth={true} duration={1000} className="logo" style={{ cursor: 'pointer', marginBottom: '1.5rem', display: 'block' }}>
              Prakash<span>Amusements</span>
            </Link>
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.8' }}>
              Your trusted partner for thrilling amusement rides and interactive carnival games.
              We specialize in professional ride management and premium equipment rentals
              for all your celebrations in Gurgaon since 2002.
            </p>
          </div>

          <div className="footer-col animate-up" style={{ animationDelay: '0.1s' }}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="hero" spy={true} smooth={true} duration={1000}>Home</Link></li>
              <li><Link to="services" spy={true} smooth={true} duration={1000}>Services</Link></li>
              <li><Link to="about" spy={true} smooth={true} duration={1000}>About Us</Link></li>
              <li><Link to="rides-booking" spy={true} smooth={true} duration={1000}>Rides Booking</Link></li>
              <li><Link to="gallery" spy={true} smooth={true} duration={1000}>Gallery</Link></li>
              <li><Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col animate-up" style={{ animationDelay: '0.15s' }}>
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="services" spy={true} smooth={true} duration={1000}>Birthday Parties</Link></li>
              <li><Link to="services" spy={true} smooth={true} duration={1000}>Corporate Events</Link></li>
              <li><Link to="services" spy={true} smooth={true} duration={1000}>Wedding Receptions</Link></li>
              <li><Link to="services" spy={true} smooth={true} duration={1000}>Festival Events</Link></li>
              <li><Link to="services" spy={true} smooth={true} duration={1000}>School Functions</Link></li>
              <li><Link to="services" spy={true} smooth={true} duration={1000}>Private Parties</Link></li>
            </ul>
          </div>

          <div className="footer-col animate-up" style={{ animationDelay: '0.2s' }}>
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:prakash15426@gmail.com">
                  <i className="fas fa-envelope" style={{ marginRight: '0.75rem', color: 'var(--primary)' }}></i>
                  prakash15426@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919899865152">
                  <i className="fas fa-phone" style={{ marginRight: '0.75rem', color: 'var(--primary)' }}></i>
                  +91 98998 65152
                </a>
              </li>
              <li>
                <a href="tel:+919899865145">
                  <i className="fas fa-phone" style={{ marginRight: '0.75rem', color: 'var(--primary)' }}></i>
                  +91 98998 65145
                </a>
              </li>
              <li>
                <a href="tel:+919113171476">
                  <i className="fas fa-phone" style={{ marginRight: '0.75rem', color: 'var(--primary)' }}></i>
                  +91 91131 71476
                </a>
              </li>
              <li>
                <span style={{ color: 'var(--gray)' }}>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '0.75rem', color: 'var(--primary)' }}></i>
                  Gurgaon, Haryana, India
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-col animate-up" style={{ animationDelay: '0.3s' }}>
            <h4>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition)', border: 'none', cursor: 'pointer' }}>
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition)', border: 'none', cursor: 'pointer' }}>
                <i className="fab fa-instagram"></i>
              </button>
              <button className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition)', border: 'none', cursor: 'pointer' }}>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prakash Amusements. All rights reserved.</p>
          <button
            onClick={() => scroll.scrollToTop()}
            className="glass"
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            Back to Top <i className="fas fa-arrow-up" style={{ marginLeft: '0.5rem' }}></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
