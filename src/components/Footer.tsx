import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Share2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-container text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="S&A Movers Logo" 
                className="h-14 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-3xl font-black text-white">S&A Movers</div>
            </Link>
          </div>
          <p className="opacity-70 max-w-sm mb-8 leading-relaxed">
            Reliable moving solutions for a stress free transition. Your trust is our priority, your satisfaction is our mission.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Share2, href: "#", color: "bg-white/10" },
              { Icon: MessageCircle, href: "https://wa.link/rcezot", color: "bg-[#25D366]" },
              { Icon: Facebook, href: "https://www.facebook.com/", color: "bg-white/10" },
              { Icon: Twitter, href: "https://x.com/", color: "bg-white/10" },
              { Icon: Instagram, href: "https://www.instagram.com/", color: "bg-white/10" },
              { Icon: Linkedin, href: "#", color: "bg-white/10" }
            ].map((social, i) => (
              <a key={i} href={social.href} target={social.href !== "#" ? "_blank" : undefined} rel={social.href !== "#" ? "noopener noreferrer" : undefined} className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center hover:bg-secondary transition-all hover:scale-110 group`}>
                <social.Icon size={18} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://wa.link/rcezot" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all flex items-center gap-2 w-fit mb-4"
              >
                <MessageCircle size={20} fill="currentColor" />
                CHAT ON WHATSAPP
              </a>
            </li>
            <li>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSc8fLVJ878s0Zm9XKnMwVh-NITLNBGm0hulAp0fAfRUCe7Tmg/viewform?usp=header" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-bold hover:opacity-80 transition-all flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                BOOK ONLINE NOW
              </a>
            </li>
            {["Residential Moving", "Commercial Relocation", "Long Distance Moves", "Same Day Moving", "Last Minute Moving"].map(link => (
              <li key={link}>
                <a href="#" className="opacity-70 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-all" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Phone size={18} />
              </div>
              <span className="font-bold text-lg">+1 647 514 5024</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Mail size={18} />
              </div>
              <a href="mailto:info@sandamovers.ca" className="opacity-80 hover:opacity-100 transition-opacity">info@sandamovers.ca</a>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:rotate-12 transition-transform">
                <MapPin size={18} />
              </div>
              <span className="opacity-80">251, Manitoba Street, M8Y 0C7 Etobicoke, ON</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm opacity-50 italic">© 2026 S&A Movers. All rights reserved.</p>
        <div className="flex gap-8 text-sm font-bold opacity-60">
          <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          <a href="#" className="hover:opacity-100 transition-opacity">Imprint</a>
          <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          <Link to="/cookies" className="hover:opacity-100 transition-opacity">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}
