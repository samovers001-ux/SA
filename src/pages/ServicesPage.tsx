import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface-container-low">
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
