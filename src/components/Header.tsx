import { Phone, Menu, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'Get Quote', href: 'https://forms.gle/GD4wexbbFHJChrVu5', isExternal: true },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="S&A Movers Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden text-xl md:text-2xl font-black text-primary tracking-tight">
            S&A Movers
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a 
                key={link.title}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {link.title}
              </a>
            ) : (
              <Link 
                key={link.title}
                to={link.href} 
                className={`${location.pathname === link.href ? 'text-secondary font-bold' : 'text-gray-600 hover:text-primary'} transition-colors font-medium`}
              >
                {link.title}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="https://wa.link/rcezot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#25D366] text-white p-2 rounded-lg hover:brightness-110 transition-all shadow-sm"
            title="WhatsApp"
          >
            <MessageCircle size={20} md:size={24} fill="currentColor" />
          </a>
          <a 
            href="tel:+16475145024" 
            className="hidden lg:flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full font-bold transition-transform hover:scale-105"
          >
            <Phone size={18} fill="currentColor" />
            +1 647 514 5024
          </a>
          <a 
            href="https://forms.gle/GD4wexbbFHJChrVu5" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-primary text-white px-4 md:px-6 py-2 rounded-lg font-bold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm text-sm md:text-base"
          >
            BOOK ONLINE
          </a>
          <button 
            className="md:hidden text-primary p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a 
                    key={link.title}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-xl font-bold text-gray-800 hover:text-secondary transition-colors"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link 
                    key={link.title}
                    to={link.href} 
                    className={`block text-xl font-bold ${location.pathname === link.href ? 'text-secondary' : 'text-gray-800'} hover:text-secondary transition-colors`}
                  >
                    {link.title}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-gray-50 flex flex-col gap-4">
                <a 
                  href="https://forms.gle/GD4wexbbFHJChrVu5" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white w-full py-4 rounded-xl font-bold text-center uppercase tracking-widest shadow-lg"
                >
                  BOOK ONLINE
                </a>
                <a 
                  href="tel:+16475145024" 
                  className="flex items-center justify-center gap-3 bg-secondary text-white w-full py-4 rounded-xl font-bold text-center"
                >
                  <Phone size={20} fill="currentColor" />
                  +1 647 514 5024
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
