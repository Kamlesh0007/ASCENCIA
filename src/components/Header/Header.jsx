import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "/images/Ascencia-Malta-Logo.svg"
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`header ${scrolled || mobileOpen ? 'header--solid' : 'header--transparent'}`} data-testid="header">
        <div className="container header__inner">
          <Link to="/" className="header__logo" data-testid="link-home-logo">
            <div className="header__logo-icon">
              <img   src={logo} alt="Ascencia Business School Malta"  />
            </div>
      
          </Link>

          <nav className="header__nav" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`header__nav-link ${location.pathname === link.to ? 'header__nav-link--active' : ''}`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="header__cta" data-testid="link-cta-apply">
            Apply Now
          </Link>

          <button
            className={`header__mobile-toggle ${mobileOpen ? 'header__mobile-toggle--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`header__mobile-menu ${mobileOpen ? 'header__mobile-menu--open' : ''}`} data-testid="nav-mobile">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`header__mobile-link ${location.pathname === link.to ? 'header__mobile-link--active' : ''}`}
            data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, '-')}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="header__mobile-cta" data-testid="link-mobile-apply">
          Apply Now
        </Link>
      </div>
    </>
  );
}
