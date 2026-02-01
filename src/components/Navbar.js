import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <Link
            spy={true}
            smooth={true}
            duration={1000}
            to="hero"
            className="logo"
            style={{ cursor: "pointer" }}
          >
            Prakash<span>Amusements</span>
          </Link>

          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="hero" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>Services</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>About</Link>
            </li>
            <li>
              <Link to="rides-booking" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>Rides Booking</Link>
            </li>
            <li>
              <Link to="gallery" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>Gallery</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={1000} onClick={closeMobileMenu}>Contact</Link>
            </li>
          </ul>

          <div className={`nav-toggle ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <style>{`
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }
        .nav-toggle span {
          width: 30px;
          height: 2px;
          background: white;
          transition: var(--transition);
        }
        @media (max-width: 768px) {
          .nav-toggle { display: flex; }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--dark);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: var(--transition);
          }
          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
