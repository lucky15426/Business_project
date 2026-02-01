import { Link } from "react-scroll";

function Header() {
  return (
    <header className="hero" id="hero">
      <video
        src="./vdo-1.mp4"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        className="hero-video"
      ></video>
      <div className="hero-overlay" style={{ background: 'linear-gradient(rgba(1, 6, 6, 0.2), rgba(1, 6, 6, 0.5))' }}></div>

      <div className="hero-content animate-up">
        <h1 style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.5)' }}>Prakash <span>Amusements</span></h1>
        <p style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.5)', fontWeight: '500' }}>
          Your Trusted Partner for Thrilling Rides & Carnival Games.
          We bring joy and excitement to every event with professional ride management.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="rides-booking"
            spy={true}
            smooth={true}
            duration={1000}
            className="btn btn-primary"
          >
            Book Rides
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            className="btn glass"
            style={{ color: 'white' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
