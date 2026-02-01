import serviceImg1 from '../assets/WhatsApp Image 2026-01-28 at 11.02.19 PM.jpeg';
import serviceImg2 from '../assets/catterpilar.jpeg';
import serviceImg3 from '../assets/bouncy.jpeg';

function Services() {
  const services = [
    {
      title: 'Amusement Rides',
      text: 'Premium amusement rides rental for festivals, fairs, and private celebrations with safety first.',
      img: serviceImg2
    },
    {
      title: 'Carnival Games',
      text: 'Engaging and interactive carnival games that bring fun and excitement to any event.',
      img: serviceImg3
    },
    {
      title: 'Ride Logistics',
      text: 'Professional setup, operation, and maintenance of all amusement equipment by expert staff.',
      img: serviceImg1
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="main-title text-center">OUR <span>SERVICES</span></h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col col-4 animate-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card" style={{ position: 'relative' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.text}</p>
                </div>
                {service.title === 'Carnival Games' && (
                  <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <div className="glass" style={{ padding: '5px 10px', borderRadius: '5px', fontSize: '0.7rem', color: 'var(--primary)', border: '1px solid var(--primary)', background: 'rgba(1, 191, 113, 0.1)' }}>
                      <i className="fas fa-gamepad"></i> PURE FUN
                    </div>
                  </div>
                )}
                {service.title === 'Amusement Rides' && (
                  <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <div className="glass" style={{ padding: '5px 10px', borderRadius: '5px', fontSize: '0.7rem', color: 'var(--primary)', border: '1px solid var(--primary)', background: 'rgba(1, 191, 113, 0.1)' }}>
                      <i className="fas fa-shield-alt"></i> SAFETY FIRST
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
