import { ShieldCheck, Star, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover brightness-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Kf7ffjzitVSzCL-KnPSjQQ61V9VpolZd95sOBC3A3dZVlf9iT4C08pgUt1pKbDoAVR67jlm8sx7d2SVGm0GWM-vZ3mX2jJvvHg_FE5zOsx-UpEy6vNzWjEij9mk17zvrCP6oNJ6reUOvp-Qd8ri_pu9yvEeBBL1-M0qxNSkneQ5MMtsDjvFX6tWPBx89Ewa-kZES1IM5I-5o-DK7FvTt2_p4NLssuBSHq_mncsjijbed7033huJoE3d6gBUAMx7WIEBhK23poW4"
          alt="S&A Movers Professional Moving Truck"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <div className="text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-400/20 backdrop-blur-sm text-blue-100 px-3 py-1 rounded-full text-sm font-bold mb-6 border border-blue-400/30"
          >
            <ShieldCheck size={16} />
            LICENSED & INSURED
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-display font-bold leading-tight"
          >
            Stress Free Logistics <br className="hidden sm:block"/>For Your Next Move
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl mb-8 opacity-90 max-w-lg leading-relaxed font-sans"
          >
            Premium moving services in Toronto and across Canada. We handle your belongings with the same care we'd give our own.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="https://forms.gle/GD4wexbbFHJChrVu5" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-bold text-center text-lg hover:brightness-110 transition-all shadow-lg active:scale-95"
            >
              BOOK ONLINE
            </a>
            <a 
              href="https://forms.gle/GD4wexbbFHJChrVu5" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-center text-lg hover:bg-white/20 transition-all active:scale-95"
            >
              GET A QUOTE
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FileText className="text-secondary" />
            Instant Quote Request
          </h2>
          <p className="text-gray-500 text-sm mb-6">Need a detailed price breakdown? Fill out our questionnaire and get a response within hours.</p>
          <a 
            href="https://forms.gle/GD4wexbbFHJChrVu5" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-secondary text-white py-5 rounded-lg font-bold hover:brightness-110 transition-all shadow-xl block text-center uppercase tracking-widest text-lg"
          >
            Start Detailed Quote
          </a>
          <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
              ].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img 
                    src={src} 
                    alt={`Reviewer ${i + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-xs">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <p className="font-bold text-primary">5.0 Star Rating (2k+ Reviews)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
