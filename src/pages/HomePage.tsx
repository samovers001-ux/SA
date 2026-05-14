import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Trust from '../components/Trust';
import Appointments from '../components/Appointments';
import Highlights from '../components/Highlights';
import ServiceArea from '../components/ServiceArea';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Highlights />
      <Trust />
      <Appointments />
      <ServiceArea />
      <Footer />
    </div>
  );
}
