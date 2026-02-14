import { Link } from 'react-router-dom';
import './Home.css';

const programmes = [
  { title: 'Masters Degrees', desc: 'Advance your career with an internationally recognized Master\'s qualification.', icon: 'M' },
  { title: 'Bachelor Degrees', desc: 'Build a strong academic foundation for your professional journey.', icon: 'B' },
  { title: 'Diploma Programmes', desc: 'Practical training designed to get you job-ready in less time.', icon: 'D' },
  { title: 'Award Certificates', desc: 'Short courses to develop specialized professional skills.', icon: 'A' },
  { title: 'Postgraduate Programmes', desc: 'Deepen your expertise and unlock new opportunities.', icon: 'P' },
  { title: 'MBA Degrees', desc: 'Executive-level education for aspiring business leaders.', icon: 'M' },
  { title: 'DBA Degrees', desc: 'The pinnacle of professional business education and research.', icon: 'D' },
];

const whyFloriana = [
  { title: 'Rich History', desc: 'A town steeped in centuries of Mediterranean heritage and culture.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M4 21V10.5M20 21V10.5"/><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg>
  )},
  { title: 'Architecture', desc: 'Stunning baroque buildings and historic fortifications at every turn.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M5 20V8l7-4 7 4v12M9 20v-4h6v4"/><path d="M9 12h.01M15 12h.01"/></svg>
  )},
  { title: 'Public Gardens', desc: 'Beautiful green spaces offering tranquil study retreats and views.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/></svg>
  )},
  { title: 'Cultural Hub', desc: 'Music festivals, art exhibitions, and community events year-round.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>
  )},
  { title: 'Central Location', desc: 'Perfectly connected by bus routes to every city in Malta.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
  )},
];

const news = [
  {
    title: 'World Cancer Day - Cancer Awareness at Ascencia Malta',
    date: '02 February 2026',
    excerpt: 'Ascencia Malta hosted a cancer awareness event in collaboration with Puttinu Cares, raising funds and awareness among students and staff.',
    image: '/images/campus-exterior.png',
  },
  {
    title: 'A New National Benchmark and Historic Achievement',
    date: '02 February 2026',
    excerpt: 'Ascencia Malta has achieved a new national benchmark, marking a historic milestone in business education in Malta.',
    image: '/images/students-collaborating.png',
  },
  {
    title: 'Ascencia Malta at ICEF Rio de Janeiro',
    date: '20 September 2025',
    excerpt: 'Ascencia Malta presented at ICEF Rio de Janeiro, showcasing Malta as a premier study destination for international students.',
    image: '/images/floriana-gardens.png',
  },
];

export default function Home() {
  return (
    <div data-testid="page-home">

      {/* Hero Section */}
      <section className="hero" data-testid="section-hero">
        <div className="hero__bg">
          <img src="/images/hero-malta.png" alt="Malta aerial view" />
        </div>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <span className="hero__label">Welcome to Ascencia Malta</span>
          <h1 className="hero__title" data-testid="text-hero-title">
            Your Career<br />
            Starts <span className="hero__title-highlight">Here</span>
          </h1>
          <p className="hero__description" data-testid="text-hero-description">
            We are eager to give you the best education. Because each training course corresponds to a personal ambition, all our students receive individual attention.
          </p>
          <div className="hero__actions">
            <a href="#programmes" className="btn btn-primary" data-testid="link-discover-courses">
              Discover Our Courses
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <Link to="/about" className="btn btn-outline" data-testid="link-learn-more">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero__stats" data-testid="section-stats">
          <div className="hero__stat">
            <div className="hero__stat-number" data-testid="text-stat-students">1000+</div>
            <div className="hero__stat-text">Students</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number" data-testid="text-stat-programmes">20+</div>
            <div className="hero__stat-text">Programmes</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number" data-testid="text-stat-nationalities">50+</div>
            <div className="hero__stat-text">Nationalities</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number" data-testid="text-stat-campuses">3</div>
            <div className="hero__stat-text">Campuses</div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="programmes" id="programmes" data-testid="section-programmes">
        <div className="container">
          <div className="programmes__header">
            <span className="section-label">Courses</span>
            <h2 className="section-title" data-testid="text-programmes-title">Find the Best Programme for Yourself</h2>
            <p className="section-subtitle" data-testid="text-programmes-subtitle">
              The success of each student is our priority. Our teams accompany each student in the success of their project.
            </p>
          </div>
          <div className="programmes__grid">
            {programmes.map((prog, i) => (
              <div className="programme-card" key={i} data-testid={`card-programme-${i}`}>
                <div className="programme-card__icon">{prog.icon}</div>
                <div className="programme-card__label">Programme</div>
                <h3 className="programme-card__title">{prog.title}</h3>
                <p className="programme-card__desc">{prog.desc}</p>
                <div className="programme-card__arrow">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview" data-testid="section-about-preview">
        <div className="container">
          <div className="about-preview__grid">
            <div className="about-preview__image">
              <img src="/images/floriana-gardens.png" alt="Floriana Malta" />
              <div className="about-preview__image-badge">Study in Malta</div>
            </div>
            <div className="about-preview__text">
              <span className="section-label">About Ascencia Malta</span>
              <h2 className="section-title" data-testid="text-about-title">Located in the Heart of the Mediterranean</h2>
              <p className="about-preview__desc">
                Ascencia Malta is located in Floriana -- right on the doorstep of Valletta. Floriana sits in the very heart of the Maltese islands, with roads leading to all the bustling and major cities in Malta.
              </p>
              <div className="about-preview__features">
                <div className="about-preview__feature">
                  <svg className="about-preview__feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="about-preview__feature-text">Internationally recognized qualifications</span>
                </div>
                <div className="about-preview__feature">
                  <svg className="about-preview__feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="about-preview__feature-text">Personalized student support and mentoring</span>
                </div>
                <div className="about-preview__feature">
                  <svg className="about-preview__feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="about-preview__feature-text">English-speaking Mediterranean environment</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-navy" data-testid="link-read-more">
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Floriana */}
      <section className="why-floriana" data-testid="section-why-floriana">
        <div className="why-floriana__bg-pattern" />
        <div className="container">
          <div className="why-floriana__header">
            <span className="section-label">Location</span>
            <h2 className="section-title" data-testid="text-floriana-title">Why Floriana?</h2>
            <p className="section-subtitle">
              Discover why our campus location offers the perfect environment for academic and personal growth.
            </p>
          </div>
          <div className="why-floriana__grid">
            {whyFloriana.map((item, i) => (
              <div className="why-floriana__card" key={i} data-testid={`card-floriana-${i}`}>
                <div className="why-floriana__card-icon">{item.icon}</div>
                <h3 className="why-floriana__card-title">{item.title}</h3>
                <p className="why-floriana__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Welcome */}
      <section className="director" data-testid="section-director">
        <div className="container">
          <div className="director__grid">
            <div className="director__image-wrap">
              <img className="director__image" src="/images/director-portrait.png" alt="Dr. Tess Giordmaina" />
              <div className="director__image-name">
                <h4>Dr. Tess Giordmaina</h4>
                <p>Director of Ascencia Malta</p>
              </div>
            </div>
            <div className="director__content">
              <span className="section-label">Welcome Message</span>
              <h2 className="section-title" data-testid="text-director-title">Welcome to Ascencia Business School</h2>
              <p className="director__quote" data-testid="text-director-quote">
                As the Director of Ascencia Malta Business and English Language School, it is an honour and a pleasure to welcome you to our beautiful campus in Floriana, Malta. I am honoured to spearhead a school that is built on a solid foundation of academic integrity and excellence paired with an inherent commitment to learn, teach, innovate and champion knowledge and business success. Our academic teams have been tasked with the responsibility of mentoring some of the brightest minds of this generation. Watching our students evolve into trailblazers with achievements in both professional and personal spheres fuels our commitment to offering practical, and business-relevant education. Our mission is to ensure that after completing their studies with us, our students are able to step right into the world of work and excel.
              </p>
              <p className="director__signature">
                "Your career starts here!" -- Dr. Tess Giordmaina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="campuses" data-testid="section-campuses">
        <div className="container">
          <div className="campuses__header">
            <span className="section-label">Our Campuses</span>
            <h2 className="section-title" data-testid="text-campuses-title">Study Around the World</h2>
            <p className="section-subtitle">
              Discover Ascencia Business School campuses and their international mobility programs.
            </p>
          </div>
          <div className="campuses__grid">
            <div className="campus-card" data-testid="card-campus-paris">
              <img src="/images/paris-campus.png" alt="Paris Campus" />
              <div className="campus-card__overlay">
                <h3 className="campus-card__city">Paris Campus</h3>
                <p className="campus-card__desc">
                  Ascencia Business School welcomes you on its Paris campus with international programs.
                </p>
              </div>
            </div>
            <div className="campus-card" data-testid="card-campus-valencia">
              <img src="/images/valencia-campus.png" alt="Valencia Campus" />
              <div className="campus-card__overlay">
                <h3 className="campus-card__city">Valencia Campus</h3>
                <p className="campus-card__desc">
                  Ascencia Business School welcomes you on its Valencia campus with international programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="partners" data-testid="section-partners">
        <div className="container">
          <div className="partners__header">
            <span className="section-label">Partner Institutions</span>
            <h2 className="section-title" data-testid="text-partners-title">We Are Proudly Partnered With</h2>
          </div>
          <div className="partners__logos">
            {['MFHEA', 'ELT Council', 'NCFHE', 'Edusign', 'Malta Chamber', 'Get Qualified', 'Erasmus+', 'EFMD'].map((name, i) => (
              <div className="partners__logo" key={i} data-testid={`logo-partner-${i}`}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="accreditations" data-testid="section-accreditations">
        <div className="container">
          <div className="accreditations__header">
            <span className="section-label">Quality Assurance</span>
            <h2 className="section-title" data-testid="text-accreditations-title">Ascencia Malta Is Accredited By</h2>
          </div>
          <div className="accreditations__logos">
            {['MQF', 'ELT Council', 'NCFHE', 'MFHEA', 'EFMD', 'AACSB'].map((name, i) => (
              <div className="accreditations__logo" key={i} data-testid={`logo-accreditation-${i}`}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="news" data-testid="section-news">
        <div className="container">
          <div className="news__header">
            <div>
              <span className="section-label">News & Events</span>
              <h2 className="section-title" data-testid="text-news-title">Discover Our Latest News</h2>
            </div>
            <a href="#" className="btn btn-navy btn-sm" data-testid="link-view-all-news">
              View All News
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="news__grid">
            {news.map((item, i) => (
              <article className="news-card" key={i} data-testid={`card-news-${i}`}>
                <img className="news-card__image" src={item.image} alt={item.title} />
                <div className="news-card__body">
                  <div className="news-card__date" data-testid={`text-news-date-${i}`}>{item.date}</div>
                  <h3 className="news-card__title" data-testid={`text-news-title-${i}`}>{item.title}</h3>
                  <p className="news-card__excerpt">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" data-testid="section-cta">
        <div className="container">
          <h2 className="cta-banner__title" data-testid="text-cta-title">Join Us!</h2>
          <p className="cta-banner__desc">
            You wish to join the Ascencia Business School community? The registration and admission procedure is simple and totally free. Our team can get back to you for any questions!
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary" data-testid="link-cta-contact">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/about" className="btn btn-outline" data-testid="link-cta-about">
              About Ascencia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
