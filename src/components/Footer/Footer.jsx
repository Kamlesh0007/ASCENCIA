import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">Ascencia Malta</div>
            <p className="footer__brand-desc">
              Your career starts here. Premium business education in the heart of the Mediterranean, preparing graduates for success in a dynamic world.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook" data-testid="link-social-facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram" data-testid="link-social-instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn" data-testid="link-social-linkedin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Ascencia Malta</h4>
            <ul className="footer__col-list">
              <li><Link to="/about" className="footer__col-link" data-testid="link-footer-about">About Us</Link></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-team">Our Team</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-work">Work With Us</a></li>
              <li><Link to="/contact" className="footer__col-link" data-testid="link-footer-contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Our Courses</h4>
            <ul className="footer__col-list">
              <li><a href="#" className="footer__col-link" data-testid="link-footer-masters">Masters Degrees</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-bachelor">Bachelor Degrees</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-diploma">Diploma Programmes</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-mba">MBA Degrees</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-dba">DBA Degrees</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Living in Malta</h4>
            <ul className="footer__col-list">
              <li><a href="#" className="footer__col-link" data-testid="link-footer-study">Study in Malta</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-jobs">Jobs in Malta</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-visa">Visa Requirements</a></li>
              <li><a href="#" className="footer__col-link" data-testid="link-footer-english">English School</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Ascencia Business School Malta. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link" data-testid="link-footer-privacy">Privacy Policy</a>
            <a href="#" className="footer__bottom-link" data-testid="link-footer-terms">Terms of Use</a>
            <a href="#" className="footer__bottom-link" data-testid="link-footer-iqa">IQA Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
