import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import RidesBooking from '../components/RidesBooking';
import Contact from '../components/Contact';

function Main() {
  return (
    <>
      <main>
        <Services />
        <About />
        <Gallery />
        <RidesBooking />
        <Contact />
      </main>
    </>
  );
}
export default Main;
