import img1 from '../assets/trampouline.jpg';
import img2 from '../assets/gun-shooting.jpeg';
import img3 from '../assets/WhatsApp Image 2026-01-28 at 11.02.18 PM (1).jpeg';
import img4 from '../assets/WhatsApp Image 2026-01-28 at 11.02.18 PM (2).jpeg';
import img5 from '../assets/WhatsApp Image 2026-01-28 at 11.02.18 PM (3).jpeg';
import img6 from '../assets/zorbing ball.jpeg';
import img7 from '../assets/micky.jpeg';
import img8 from '../assets/WhatsApp Image 2026-01-28 at 11.02.19 PM (1).jpeg';
import img9 from '../assets/game.jpeg';

function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Trampouline', img: img1 },
    { id: 2, title: 'Gun Shooting', img: img2 },
    { id: 3, title: 'Bouncy Castle', img: img3 },
    { id: 4, title: 'Ferris Wheel', img: img4 },
    { id: 5, title: 'Train', img: img5 },
    { id: 6, title: 'Zorbing Ball', img: img6 },
    { id: 7, title: 'Small Bouncy', img: img7 },
    { id: 8, title: 'Dragon Boat Ride', img: img8 },
    { id: 9, title: 'Game', img: img9 },
  ];

  return (
    <section className="section section-bg" id="gallery">
      <div className="container">
        <h2 className="main-title text-center">EVENTS <span>GALLERY</span></h2>
        <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--gray)' }}>
          Take a look at some of our memorable events and celebrations. We bring life to every occasion.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="gallery-item animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
