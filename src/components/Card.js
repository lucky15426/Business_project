function Card({ title, img, text, delay = "0s" }) {
  return (
    <div className="card animate-up" style={{ animationDelay: delay }}>
      <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', height: '200px' }}>
        <img
          alt={title}
          src={`./img/${img}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--dark)' }}>{title}</h3>
      <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>{text}</p>
    </div>
  );
}

export default Card;
