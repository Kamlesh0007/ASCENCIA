import { useState } from 'react';

import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+356',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div data-testid="page-contact">

      {/* Page Hero */}
      <section className="page-hero" data-testid="section-contact-hero">
        <div className="page-hero__bg-shape" />
        <div className="container">
          <span className="page-hero__label">Ascencia Malta</span>
          <h1 className="page-hero__title" data-testid="text-contact-hero-title">Contact Us</h1>
          <p className="page-hero__subtitle" data-testid="text-contact-hero-subtitle">
            For any question related to our campus, our programs or any other subject concerning Ascencia Malta, please fill in the form below. Our teams will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content" data-testid="section-contact-content">
        <div className="container">
          <div className="contact-content__grid">
            {/* Left: Info */}
            <div className="contact-info">
              <h2 className="contact-info__title" data-testid="text-contact-info-title">Get in Touch</h2>
              <p className="contact-info__desc">
                Have questions about our programmes, admissions, or campus life? We'd love to hear from you. Reach out using any of the methods below.
              </p>

              <div className="contact-info__items">
                <div className="contact-info__item" data-testid="info-address">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
                  </div>
                  <div>
                    <div className="contact-info__item-label">Address</div>
                    <div className="contact-info__item-value">
                      Floriana, Malta<br />
                      On the doorstep of Valletta
                    </div>
                  </div>
                </div>

                <div className="contact-info__item" data-testid="info-email">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="contact-info__item-label">Email</div>
                    <div className="contact-info__item-value">info@ascencia-business-school.mt</div>
                  </div>
                </div>

                <div className="contact-info__item" data-testid="info-phone">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="contact-info__item-label">Phone</div>
                    <div className="contact-info__item-value">+356 2124 0000</div>
                  </div>
                </div>

                <div className="contact-info__item" data-testid="info-hours">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="contact-info__item-label">Office Hours</div>
                    <div className="contact-info__item-value">
                      Mon - Fri: 9:00 AM - 5:00 PM<br />
                      Sat - Sun: Closed
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info__map" data-testid="map-placeholder">
                <img src="/images/floriana-gardens.png" alt="Floriana, Malta - Campus location" />
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrap" data-testid="section-contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: 12 }} data-testid="text-form-success">Thank You!</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    Your message has been received. Our team will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="contact-form-wrap__title" data-testid="text-form-title">Send Us a Message</h3>
                  <p className="contact-form-wrap__subtitle">Fields marked with * are required</p>

                  <form onSubmit={handleSubmit} data-testid="form-contact">
                    <div className="contact-form__row">
                      <div className="contact-form__group">
                        <label className="contact-form__label" htmlFor="firstName">
                          First Name <span className="contact-form__required">*</span>
                        </label>
                        <input
                          className="contact-form__input"
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Your first name"
                          required
                          data-testid="input-first-name"
                        />
                      </div>
                      <div className="contact-form__group">
                        <label className="contact-form__label" htmlFor="lastName">
                          Last Name <span className="contact-form__required">*</span>
                        </label>
                        <input
                          className="contact-form__input"
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Your last name"
                          required
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="email">
                        Email <span className="contact-form__required">*</span>
                      </label>
                      <input
                        className="contact-form__input"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        data-testid="input-email"
                      />
                    </div>

                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="phone">Phone</label>
                      <div className="contact-form__phone-group">
                        <select
                          className="contact-form__select contact-form__phone-code"
                          name="phoneCode"
                          value={formData.phoneCode}
                          onChange={handleChange}
                          data-testid="select-phone-code"
                        >
                          <option value="+356">+356</option>
                          <option value="+1">+1</option>
                          <option value="+33">+33</option>
                          <option value="+34">+34</option>
                          <option value="+39">+39</option>
                          <option value="+44">+44</option>
                          <option value="+49">+49</option>
                          <option value="+86">+86</option>
                          <option value="+91">+91</option>
                          <option value="+212">+212</option>
                          <option value="+213">+213</option>
                          <option value="+216">+216</option>
                          <option value="+234">+234</option>
                          <option value="+55">+55</option>
                          <option value="+81">+81</option>
                          <option value="+82">+82</option>
                          <option value="+61">+61</option>
                          <option value="+7">+7</option>
                          <option value="+90">+90</option>
                          <option value="+966">+966</option>
                          <option value="+971">+971</option>
                          <option value="+92">+92</option>
                          <option value="+20">+20</option>
                          <option value="+254">+254</option>
                          <option value="+27">+27</option>
                          <option value="+62">+62</option>
                          <option value="+63">+63</option>
                          <option value="+60">+60</option>
                          <option value="+65">+65</option>
                          <option value="+66">+66</option>
                          <option value="+84">+84</option>
                          <option value="+880">+880</option>
                          <option value="+94">+94</option>
                          <option value="+977">+977</option>
                        </select>
                        <input
                          className="contact-form__input"
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="subject">
                        Subject <span className="contact-form__required">*</span>
                      </label>
                      <select
                        className="contact-form__select"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        data-testid="select-subject"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions & Enrolment</option>
                        <option value="programmes">Programmes & Courses</option>
                        <option value="visa">Visa & Immigration</option>
                        <option value="financial">Financial Aid & Scholarships</option>
                        <option value="campus">Campus & Facilities</option>
                        <option value="partnerships">Partnerships & Collaborations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="message">
                        Your Message <span className="contact-form__required">*</span>
                      </label>
                      <textarea
                        className="contact-form__textarea"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry..."
                        required
                        data-testid="input-message"
                      />
                    </div>

                    <div className="contact-form__checkbox-group">
                      <input
                        className="contact-form__checkbox"
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleCheckbox}
                        required
                        data-testid="input-consent"
                      />
                      <label className="contact-form__checkbox-text" htmlFor="consent">
                        I agree that Ascencia Malta collects and uses the personal data I have entered in this form in order to send me educational proposals adapted to my project, in accordance with their data protection policy.
                      </label>
                    </div>

                    <button className="contact-form__submit" type="submit" data-testid="button-submit">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" data-testid="section-contact-cta">
        <div className="container">
          <h2 className="cta-banner__title">Ready to Start Your Journey?</h2>
          <p className="cta-banner__desc">
            Take the first step towards your future career. Apply to Ascencia Malta today and join our growing community of international students.
          </p>
          <div className="cta-banner__actions">
            <a href="#" className="btn btn-primary" data-testid="link-contact-cta-apply">
              Apply Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
