import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle2, Award, Users, Heart, Target, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Profile Hero */}
        <section className="relative py-24 bg-primary text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl font-display font-black mb-6 leading-tight">
                Our Story: Moving <span className="text-secondary">Excellence</span> to Every Door.
              </h1>
              <p className="text-xl opacity-80 leading-relaxed font-medium">
                At S & A Movers, we provide a complete relocation solution designed to make your transition smooth, organised, and stress-free. We believe moving should be the start of an exciting new chapter, not a source of anxiety.
              </p>
            </motion.div>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-20 hidden lg:block" />
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100"
              >
                <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-display font-black text-primary mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To redefine the moving industry by providing transparent, reliable, and exceptionally careful relocation services that allow our clients to focus on what matters most—settling into their new space.
                </p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                className="bg-primary p-12 rounded-[3rem] text-white"
              >
                <div className="bg-white/10 text-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={32} />
                </div>
                <h2 className="text-3xl font-display font-black mb-4">Our Values</h2>
                <p className="opacity-80 text-lg leading-relaxed">
                  We operate with integrity, respect, and a commitment to excellence. Every box we carry and every truck we drive is a testament to our dedication to the community we serve across Ontario.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Difference */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-black text-primary mb-6">Why S&A Movers?</h2>
              <p className="text-gray-500 text-lg">We're more than just muscle. We're your logistics partners from the first box to the last piece of furniture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users size={40} />,
                  title: "Professional Team",
                  desc: "Fully trained, vetted, and background-checked movers who care about your property."
                },
                {
                  icon: <Award size={40} />,
                  title: "Certified Quality",
                  desc: "Utilizing top-tier packing materials and specialized equipment for every single move."
                },
                {
                  icon: <MapPin size={40} />,
                  title: "Local Expertise",
                  desc: "Deep knowledge of Ontario's neighborhoods ensuring efficient routes and timely arrivals."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl transition-all"
                >
                  <div className="text-secondary mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Our Team"
                  className="relative rounded-3xl shadow-2xl"
                />
                {/* Team Branding */}
                <div className="absolute bottom-6 right-6 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-xl opacity-90">
                  <p className="text-white font-black text-xs tracking-widest uppercase">S & A Movers Certified Team</p>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-display font-black text-primary">A Complete Relocation Solution</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand that moving is more than just transporting items—it involves preparing spaces, handling belongings with care, and ensuring everything is clean and ready for the next stage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Experienced & Professional Team",
                    "Comprehensive Services",
                    "Customer Satisfaction Focused",
                    "Local & Long Distance",
                    "Commercial & Office Relocation",
                    "Residential Moving"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary shrink-0" size={20} />
                      <span className="font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <p className="text-xl font-bold text-primary">Serving Ontario with Pride since 2025</p>
                  <p className="text-gray-500">Our service combines professional moving expertise with thorough smooth support, allowing you to manage your entire relocation process with one reliable team.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
