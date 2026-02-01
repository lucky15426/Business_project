import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePhone = (phone) => {
    return String(phone).match(/^[6-9]\d{9}$/);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || serviceId === 'YOUR_SERVICE_ID' || !publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
      const mailtoLink = `mailto:prakash15426@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="main-title text-center">GET IN <span>TOUCH</span></h2>
        <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--gray)' }}>
          Have a question or want to book an event? Fill out the form below and we'll get back to you shortly.
        </p>

        <div className="row">
          <div className="col col-4 animate-up">
            <div className="card" style={{ height: '100%', padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>Contact Information</h3>

              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="glass" style={{ width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Email Us</h5>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>prakash15426@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="glass" style={{ width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Call Us</h5>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>+91 98998 65152</p>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>+91 98998 65145</p>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>+91 91131 71476</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="glass" style={{ width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Our Location</h5>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>Gurgaon, Haryana, India</p>
                </div>
              </div>

              <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                <h5 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-clock" style={{ color: 'var(--primary)' }}></i>
                  Business Hours
                </h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gray)', fontSize: '0.95rem' }}>
                  <span>Mon - Sun</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-8 animate-up" style={{ animationDelay: '0.2s' }}>
            <form ref={form} onSubmit={handleSubmit} className="card" style={{ border: 'none', padding: '3rem' }}>
              <div className="row">
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-user"></i>
                      <input
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-envelope"></i>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className={`form-control ${errors.email ? 'invalid' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.email && <div className="error-message"><i className="fas fa-exclamation-circle"></i>{errors.email}</div>}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-phone"></i>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        className={`form-control ${errors.phone ? 'invalid' : ''}`}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.phone && <div className="error-message"><i className="fas fa-exclamation-circle"></i>{errors.phone}</div>}
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-tag"></i>
                      <input
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group" style={{ alignItems: 'flex-start' }}>
                  <i className="fas fa-comment-alt" style={{ marginTop: '1.2rem' }}></i>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div style={{ padding: '1rem', marginBottom: '1.5rem', background: '#dcfce7', color: '#166534', borderRadius: '8px', textAlign: 'center', fontWeight: '500' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{ padding: '1rem', marginBottom: '1.5rem', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', textAlign: 'center', fontWeight: '500' }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                  Error sending message. Please try again later.
                </div>
              )}

              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
