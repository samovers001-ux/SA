import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Truck, MapPin, Calendar, Phone, Mail, User, Box, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function QuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromAddress: '',
    toAddress: '',
    moveDate: '',
    moveType: 'Residential',
    homeSize: '1 Bedroom',
    needsPacking: false,
    details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        window.location.href = 'https://forms.gle/GD4wexbbFHJChrVu5';
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md w-full text-center space-y-6 p-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-2xl"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h1 className="text-4xl font-display font-bold text-primary">Quote Requested!</h1>
            <p className="text-gray-600 leading-relaxed">
              Thank you for your request. Our logistics team will review your details and send a tailoted quote to <strong>{formData.email}</strong> shortly.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all"
            >
              Back to Home
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block px-4 py-2 bg-red-50 text-secondary rounded-full text-sm font-black uppercase tracking-widest"
                >
                  Free Estimation
                </motion.div>
                <h1 className="text-6xl font-display font-black text-primary leading-[1.1]">
                  Detailed <br/>
                  <span className="text-secondary underline decoration-8 decoration-red-100 underline-offset-8">Quote</span> Request
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fill out our comprehensive questionnaire to receive our most accurate pricing. No hidden fees, just transparent logistics.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shrink-0 transition-colors">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl">Privacy Guaranteed</h3>
                    <p className="text-gray-500">Your information is secure and only used for your quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shrink-0 transition-colors">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl">Speedy Turnaround</h3>
                    <p className="text-gray-500">Expect a response within 2-4 business hours.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-primary rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold">Prefer to talk?</h3>
                  <p className="opacity-80">Our coordinators are standing by for immediate assistance.</p>
                  <a href="tel:+16475145024" className="text-3xl font-black text-secondary block hover:scale-105 transition-transform origin-left">
                    +1 647 514 5024
                  </a>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-gray-100"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-secondary border-b border-gray-100 pb-4 mb-6">
                      <User size={20} />
                      <h2 className="font-black uppercase tracking-widest text-sm">Contact Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Full Name</label>
                        <input 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium" 
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Email Address</label>
                        <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium" 
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Phone Number</label>
                      <input 
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium" 
                        placeholder="+1 (xxx) xxx-xxxx"
                      />
                    </div>
                  </div>

                  {/* Move Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-secondary border-b border-gray-100 pb-4 mb-6 mt-10">
                      <Truck size={20} />
                      <h2 className="font-black uppercase tracking-widest text-sm">Move Details</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Origin Address</label>
                        <input 
                          required
                          value={formData.fromAddress}
                          onChange={(e) => setFormData({...formData, fromAddress: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium" 
                          placeholder="Street, City, Province"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Destination Address</label>
                        <input 
                          required
                          value={formData.toAddress}
                          onChange={(e) => setFormData({...formData, toAddress: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium" 
                          placeholder="Street, City, Province"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Preferred Move Date</label>
                        <input 
                          required
                          type="date"
                          value={formData.moveDate}
                          onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Home Size</label>
                        <select 
                          value={formData.homeSize}
                          onChange={(e) => setFormData({...formData, homeSize: e.target.value})}
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium appearance-none"
                        >
                          <option>Studio</option>
                          <option>1 Bedroom</option>
                          <option>2 Bedroom</option>
                          <option>3+ Bedroom</option>
                          <option>Office / Commercial</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-6 pt-6">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <input 
                        type="checkbox"
                        checked={formData.needsPacking}
                        onChange={(e) => setFormData({...formData, needsPacking: e.target.checked})}
                        className="w-6 h-6 rounded-lg accent-secondary cursor-pointer"
                      />
                      <span className="font-bold text-primary group-hover:text-secondary transition-colors">Include full packing services?</span>
                    </label>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-tighter">Additional Inventory / Special Requests</label>
                      <textarea 
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none transition-all font-medium min-h-[120px]" 
                        placeholder="List any heavy items (Piano, Safe, etc.) or specific storage needs..."
                      />
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white py-6 rounded-2xl font-black text-xl hover:brightness-110 shadow-2xl shadow-red-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'SENDING REQUEST...' : 'GET MY FREE QUOTE'}</span>
                    {!isSubmitting && <ArrowRight size={24} />}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
