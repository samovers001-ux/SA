import { Phone, Mail, MapPin, Clock, Truck, ChevronRight, MessageSquare, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const serviceAreas = [
    "Toronto", "Etobicoke", "Mississauga", "North York", 
    "Scarborough", "Brampton", "Vaughan", "And surrounding Ontario areas"
  ];

  const services = [
    "Residential Moving", "Commercial & Office Moving", "Local Moving",
    "Long-Distance Moving", "Same-Day Moving", "Packing & Unpacking", "Furniture Moving"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                Contact <span className="text-secondary">Us</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                Get In Touch With S & A Movers 🚚
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Contact Info Card */}
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-black text-primary mb-6">Need reliable moving services in Etobicoke or across Ontario?</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our team is ready to help make your move smooth, safe, and stress free. 
                    Whether you’re moving a home, apartment, office, or need last minute moving assistance, 
                    we’re here to assist you every step of the way.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border border-gray-100">
                      <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                        <Phone size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-sm">Phone</h3>
                        <p className="text-xl font-black text-primary">+1 (647) 514 5024</p>
                      </div>
                    </div>

                    <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border border-gray-100">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        <Mail size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-sm">Email</h3>
                        <p className="text-xl font-black text-primary">info@sandamovers.ca</p>
                      </div>
                    </div>

                    <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border border-gray-100">
                      <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary-container/20">
                        <Globe size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-sm">Website</h3>
                        <p className="text-xl font-black text-primary">sandamovers.ca</p>
                      </div>
                    </div>

                    <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border border-gray-100">
                      <div className="w-14 h-14 bg-secondary text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-sm">Address</h3>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=251+Manitoba+Street+M8Y+0C7+Etobicoke+ON"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-black text-primary hover:text-secondary transition-colors"
                        >
                          251, Manitoba Street, M8Y 0C7 Etobicoke, ON
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border border-gray-100">
                      <div className="w-14 h-14 bg-secondary text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                        <Clock size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-sm">Hours</h3>
                        <p className="text-lg font-black text-primary">7:00 AM – 11:45 PM</p>
                        <p className="text-xs font-bold text-secondary uppercase">Monday – Sunday</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Service Areas */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <MapPin size={24} className="text-secondary" />
                      </div>
                      <h3 className="text-2xl font-black text-primary">Service Areas</h3>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceAreas.map((area, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600 font-medium">
                          <ChevronRight size={16} className="text-secondary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Our Services */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Truck size={24} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-black text-primary">Our Services</h3>
                    </div>
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600 font-medium">
                          <ShieldCheck size={16} className="text-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar - Request Quote CTA */}
              <div className="lg:col-span-1">
                <div className="bg-primary text-white rounded-3xl p-8 sticky top-28 overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 -m-4">
                    <MessageSquare size={120} className="text-white/5 rotate-12" />
                  </div>
                  
                  <h3 className="text-2xl font-black mb-6 relative z-10">📩 Request a Free Quote</h3>
                  <p className="mb-8 opacity-80 leading-relaxed font-medium">
                    Use our online booking form to get a fast response from our team. It's quick, easy, and free!
                  </p>
                  
                  <div className="space-y-6 mb-10 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-sm font-bold">1</div>
                      <p className="font-bold">Select your moving date</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-sm font-bold">2</div>
                      <p className="font-bold">Enter pickup & drop-off locations</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-sm font-bold">3</div>
                      <p className="font-bold">Choose your moving services</p>
                    </div>
                  </div>

                  <Link 
                    to="/quote" 
                    className="block w-full bg-secondary text-white py-5 rounded-2xl text-center font-black uppercase tracking-widest hover:bg-secondary-container transition-all hover:scale-[1.02] shadow-lg shadow-black/10"
                  >
                    Get Your Quote Now
                  </Link>
                  
                  <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 italic text-sm text-center">
                    "Emergency and last-minute bookings available based on availability."
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center max-w-3xl mx-auto">
              <p className="text-gray-500 font-medium italic">
                S & A Movers is committed to professional, affordable, and dependable moving services across Ontario. 🇨🇦
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
