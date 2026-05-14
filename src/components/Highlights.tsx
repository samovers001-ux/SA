import { ShieldCheck, Truck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export default function Highlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl"
          >
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa2DtoI7QYV6Es4HPKBKSsuEYLMtaKRvksVqW6ReJhI4aAASMJslX5_3kQU7PLZXK2jqp94vtlUmOlea5zpM6EWFVSiibcNOSN4E_qYQ1WREwWd8rnm4dQ2MZi4MgT4qkowoXhuFeHY89ypNNaCsi6Dzrw7uXPuU1UFEvTabpcCVV-SNxPtVW8yQRAZ2ti_DSYmCD5XhfKU-ATm-0XQSvF65rKa_naU2Ppfpi0mvRlQnMJ02kHyOlM3dgaCMMmCqxw3d0pUhjcipM" 
              alt="Commercial Relocation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-4xl font-bold text-white mb-2">Commercial <br/>Relocation</h3>
              <p className="text-blue-100/70 text-lg">Enterprise-grade office moves with zero downtime.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gray-50 rounded-3xl p-10 flex flex-col justify-center border border-gray-100 shadow-sm"
          >
            <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <ShieldCheck className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Fully Insured Peace of Mind</h3>
            <p className="text-gray-600 text-lg">We treat every item as if it were our own, backed by comprehensive protection and care.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-secondary rounded-3xl p-10 flex flex-col justify-end text-white shadow-xl relative overflow-hidden group"
          >
            <Truck className="text-white/20 absolute top-4 right-4 group-hover:scale-110 transition-transform" size={60} />
            <div className="relative z-10">
              <Truck size={40} className="mb-4" />
              <h3 className="text-2xl font-bold">Fast Transit</h3>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary rounded-3xl p-10 flex flex-col justify-end text-white shadow-xl relative overflow-hidden group"
          >
            <Headphones className="text-white/10 absolute top-4 right-4 group-hover:scale-110 transition-transform" size={60} />
            <div className="relative z-10">
              <Headphones size={40} className="mb-4" />
              <h3 className="text-2xl font-bold">24/7 Support</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
