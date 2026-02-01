import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import rideHeroImg from '../assets/car.jpeg';

function RidesBooking() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    rideType: '',
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

    // Real-time validation clearing
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
    // ... existing emailjs logic ...
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_BOOKING_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || serviceId === 'YOUR_SERVICE_ID' || !publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
      const mailtoLink = `mailto:prakash15426@gmail.com?subject=${encodeURIComponent('Ride Booking Request')}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.eventDate}\nEvent: ${formData.eventType}\nRide: ${formData.rideType}\n\nDetails: ${formData.message}`)}`;
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
          setFormData({ name: '', email: '', phone: '', eventDate: '', eventType: '', rideType: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  const rides = [
    { name: 'Giant Wheel', icon: 'fa-dharmachakra' },
    { name: 'Zorbing Ball', icon: 'fa-globe-asia' },
    { name: 'Bouncy', icon: 'fa-cube' },
    { name: 'Trampoline', icon: 'fa-child' },
    { name: 'Train', icon: 'fa-train' },
    { name: 'Dragon Boat', icon: 'fa-ship' },
    { name: 'Small Car Ride', icon: 'fa-car' },
    { name: 'Sliding Ride', icon: 'fa-sliders-h' },
    { name: 'Water Zorbing', icon: 'fa-water' },
    { name: 'Kids Jhula', icon: 'fa-baby-carriage' }
  ];

  const eventTypes = [
    'Birthday Party', 'Wedding', 'Corporate Event', 'Community Festival',
    'Anniversary', 'Cultural Event', 'Other'
  ];

  return (
    <section className="section" id="rides-booking">
      <div className="container">
        <h2 className="main-title text-center">BOOK <span>RIDES</span></h2>
        <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 5rem', color: 'var(--gray)' }}>
          Reserve your favorite rides and carnival games for your upcoming event. Fill out the form below and we'll help you create a thrilling experience for your guests.
        </p>

        <div className="row" style={{ gap: '3rem' }}>
          <div className="col col-7 animate-up">
            <form ref={form} onSubmit={handleSubmit} className="card" style={{ padding: '3rem', border: 'none' }}>
              <h3 style={{ marginBottom: '2rem' }}>Booking Request</h3>
              <div className="row">
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-user"></i>
                      <input name="name" placeholder="Your Name" className="form-control" value={formData.name} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-envelope"></i>
                      <input name="email" type="email" placeholder="Email Address" className={`form-control ${errors.email ? 'invalid' : ''}`} value={formData.email} onChange={handleChange} required />
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
                      <input name="phone" type="tel" placeholder="Phone Number" className={`form-control ${errors.phone ? 'invalid' : ''}`} value={formData.phone} onChange={handleChange} required />
                    </div>
                    {errors.phone && <div className="error-message"><i className="fas fa-exclamation-circle"></i>{errors.phone}</div>}
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-calendar-alt"></i>
                      <input name="eventDate" type="date" className="form-control" value={formData.eventDate} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-star"></i>
                      <select name="eventType" className="form-control" value={formData.eventType} onChange={handleChange} required style={{ paddingLeft: '2.75rem' }}>
                        <option value="" disabled>Event Type</option>
                        {eventTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fas fa-dharmachakra"></i>
                      <select name="rideType" className="form-control" value={formData.rideType} onChange={handleChange} required style={{ paddingLeft: '2.75rem' }}>
                        <option value="" disabled>Preferred Ride</option>
                        {rides.map((ride, index) => <option key={index} value={ride.name}>{ride.name}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group" style={{ alignItems: 'flex-start' }}>
                  <i className="fas fa-comment-alt" style={{ marginTop: '1.2rem' }}></i>
                  <textarea name="message" placeholder="Additional Details (Location, Guest Count, etc.)" className="form-control" value={formData.message} onChange={handleChange} style={{ minHeight: '120px' }} />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div style={{ padding: '1rem', marginBottom: '1.5rem', background: '#dcfce7', color: '#166534', borderRadius: '8px', textAlign: 'center', fontWeight: '500' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
                  Booking request sent successfully! We'll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{ padding: '1rem', marginBottom: '1.5rem', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', textAlign: 'center', fontWeight: '500' }}>
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                  Error sending request. Please try again later.
                </div>
              )}

              <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ width: '100%', marginTop: '1rem' }}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending Request...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Submit Booking Request
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="col col-5 animate-up" style={{ animationDelay: '0.2s' }}>
            <div className="card" style={{ height: '100%', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(0,0,0,0.05)', background: 'white', padding: 0 }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={rideHeroImg}
                  alt="Amusement Rides"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                  <div className="glass" style={{ padding: '0.6rem 1.2rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(1, 191, 113, 0.9)', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    <i className="fas fa-ticket-alt" style={{ color: 'white' }}></i>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>PREMIUM RIDES</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: '3rem', flex: 1 }}>
                <h3 style={{ marginBottom: '2.5rem', fontSize: '2rem', color: 'var(--dark)' }}>
                  <i className="fas fa-gamepad" style={{ color: 'var(--primary)', marginRight: '15px' }}></i>
                  Featured Selection
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  {rides.slice(0, 10).map((ride, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      color: 'var(--dark)',
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      padding: '0.8rem 0',
                      borderBottom: '1px solid rgba(0,0,0,0.05)'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '15px',
                        background: 'rgba(1, 191, 113, 0.1)',
                        border: '1px solid rgba(1, 191, 113, 0.2)'
                      }}>
                        <i className={`fas ${ride.icon}`} style={{ color: 'var(--primary)', fontSize: '1.4rem' }}></i>
                      </div>
                      {ride.name}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px dashed rgba(0,0,0,0.05)' }}>
                  <p style={{ color: 'var(--gray)', fontSize: '1rem', lineHeight: '1.6', display: 'flex', gap: '15px', fontStyle: 'italic' }}>
                    <i className="fas fa-shield-alt" style={{ color: 'var(--primary)', fontSize: '1.2rem', marginTop: '5px' }}></i>
                    <span>All our rides are strictly safety-inspected and maintained by certified professionals.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RidesBooking;
