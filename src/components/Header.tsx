import { Phone, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="S&A Movers Logo" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden text-2xl font-black text-primary tracking-tight">
            S&A Movers
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-secondary font-bold border-b-2 border-secondary py-1">Home</Link>
          <a href="/#services" className="text-gray-600 hover:text-primary transition-colors font-medium">Services</a>
          <a href="https://forms.gle/L9gPTg3f46TtZX4A6" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors font-medium">Get Quote</a>
          <Link to="/about" className="text-gray-600 hover:text-primary transition-colors font-medium">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors font-medium">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+16475145024" 
            className="hidden lg:flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full font-bold transition-transform hover:scale-105"
          >
            <Phone size={18} fill="currentColor" />
            +1 647 514 5024
          </a>
          <a 
            href="https://forms.gle/L9gPTg3f46TtZX4A6" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-lg font-bold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm"
          >
            BOOK ONLINE
          </a>
          <button className="md:hidden text-primary">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
