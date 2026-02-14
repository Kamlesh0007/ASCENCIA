import { Link } from 'react-router-dom';
import { FaGlobe, FaGraduationCap, FaBriefcase, FaBullseye,FaGem } from "react-icons/fa";

import './About.css';

const values = [
  {
    number: '01',
    title: 'Openness to International Markets',
    desc: 'Our programs have been specifically designed to host international students and enable students to do their internship in the English language or part of their training in another country, at the heart of the international system.',
    icon: <FaGlobe />
  },
  {
    number: '02',
    title: 'Teaching Excellence',
    desc: 'The member schools of Ascencia are all recognised in their specialised domains and prepare graduates to achieve insertion in world job markets. The faculty comprises an academic lecturing body and the best professional players.',
    icon: <FaGraduationCap />
  },
  {
    number: '03',
    title: 'Job Access',
    desc: 'Because each training course corresponds to a personal ambition, all our students receive individual attention. Professional integration, promoted by work-linked training, is our top priority.',
    icon: <FaBriefcase />
  },
];


const partnerNames = [
  'University of Paris', 'London Business School', 'IE University',
  'ESCP Europe', 'IESEG', 'HEC Montreal',
  'Sapienza University', 'EM Lyon', 'King\'s College',
  'Copenhagen Business School', 'ESSEC', 'Imperial College',
  'Bocconi University', 'Warwick Business', 'SDA Bocconi',
  'WHU', 'Rotterdam School', 'Stockholm School',
];

export default function About() {
  return (
    <div data-testid="page-about">
 
      {/* Page Hero */}
      <section className="page-hero" data-testid="section-about-hero">
        <div className="page-hero__bg-shape" />
        <div className="container">
          <span className="page-hero__label">Ascencia Malta</span>
          <h1 className="page-hero__title" data-testid="text-about-hero-title">
            We Are Eager to Give You the Best Education
          </h1>
          <p className="page-hero__subtitle" data-testid="text-about-hero-subtitle">
            Ascencia's ambition is to realize your potential of ascension. Through an individualized follow-up of the students, our teams are at your service for your future.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro" data-testid="section-about-intro">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__image">
              <img src="/images/campus-classroom.png" alt="Students at Ascencia Malta" />
            </div>
            <div className="about-intro__content">
              <span className="section-label">About</span>
              <h3 data-testid="text-about-pedagogy-title">A Participative and Innovative Pedagogy</h3>
              <p className="about-intro__text">
                Our training courses are based on a participative and innovative pedagogy based on the value of the example and the constant exchange between learners and experienced professionals.
              </p>
              <p className="about-intro__text">
                The realities of corporate life are at the heart of the personalized learning methods we use. They are intended to identify potentials and to hatch vocations of managers and business developers.
              </p>
              <p className="about-intro__text">
                Our campus is also open to all international candidates who wish to study management in Malta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission" data-testid="section-mission">
        <div className="container">
          <div className="mission__card">
            <div className="mission__icon">
 <FaBullseye />            </div>
            <span className="section-label">Our Mission</span>
            <h2 className="mission__title" data-testid="text-mission-title">Mission Statement</h2>
            <p className="mission__text" data-testid="text-mission-text">
              At Ascencia Malta, we empower students through a student-centered approach that fosters critical thinking, creativity, and lifelong learning. We deliver high-quality education that meets rigorous standards and prepares graduates for success in a dynamic world. Together with our partnered stakeholders, we are dedicated to developing socially responsible leaders who champion diversity, inclusion, and equity, creating meaningful impact within our diverse community.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values" data-testid="section-values">
        <div className="container">
          <div className="values__header">
                <div className="values__icon">
 <FaGem/>            </div>
            <span className="section-label">Our Values</span>
            <h2 className="section-title" data-testid="text-values-title">Excellence, a Priority for Ascencia</h2>
            <p className="section-subtitle">
              Three pillars that define our commitment to your success.
            </p>
          </div>
       <div className="values__grid">
  {values.map((val, i) => (
    <div className="value-card" key={i} data-testid={`card-value-${i}`}>
      
      {/* Icon */}
      <div className="value-card__icon">{val.icon}</div>

      {/* Number */}
      <div className="value-card__number">{val.number}</div>

      {/* Title */}
      <h3 className="value-card__title">{val.title}</h3>

      {/* Description */}
      <p className="value-card__desc">{val.desc}</p>

    </div>
  ))}
</div>

        </div>
      </section>

      {/* Tutors */}
      <section className="tutors" data-testid="section-tutors">
        <div className="container">
          <div className="tutors__grid">
            <div className="tutors__content">
              <span className="section-label">Our Tutors</span>
              <h2 className="section-title" data-testid="text-tutors-title">Special Teachers from the Industry</h2>
              <p className="tutors__text">
                At Ascencia Malta, you'll experience a friendly and welcoming student-centred learning environment. Our lecturers, many entrepreneurs themselves, provide learners with the opportunity to build their professional and academic qualifications.
              </p>
              <p className="tutors__text">
                Through a career path that meets their interests and aspirations in their chosen career, Ascencia Malta lecturers support, mentor and guide you through the skills, knowledge and practical work experience to achieve your goals.
              </p>
            </div>
            <div className="tutors__image">
              <img src="/images/students-collaborating.png" alt="Ascencia tutors and students" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="about-partners" data-testid="section-about-partners">
        <div className="container">
          <div className="about-partners__header">
            <span className="section-label">Partner Institutions</span>
            <h2 className="section-title" data-testid="text-about-partners-title">We Are Proudly Partnered With</h2>
          </div>
          <div className="about-partners__grid">
            {partnerNames.map((name, i) => (
              <div className="about-partner-item" key={i} data-testid={`logo-about-partner-${i}`}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-testid="section-about-cta">
        <div className="container">
          <h2 className="cta-banner__title">Join Us!</h2>
          <p className="cta-banner__desc">
            You wish to join the Ascencia Business School community? The registration and admission procedure is simple and totally free. Our team can get back to you for any questions!
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary" data-testid="link-about-cta-contact">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
