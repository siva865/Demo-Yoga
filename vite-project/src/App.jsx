import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Classes from './Classes';
import Schedule from './Shedule';
import Teachers from './Teacher';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="font-poppins overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Teachers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;