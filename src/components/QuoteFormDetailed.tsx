import { CheckCircle2, ChevronRight, Truck, Box, HelpCircle, ShieldCheck, Mail, Phone, User, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function QuoteFormDetailed() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fromAddress: '',
    toAddress: '',
    moveType: 'Residential',
    moveDate: '',
    phone: '',
    name: '',
    email: '',
    homeSize: '1 Bedroom',
    details: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('Submitting quote request...', formData);
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Quote submission error:', response.status, errorText);
        throw new Error(`Server returned ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      if (result.success) {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfrE2j9Pbu9-QQQAMoK7ZqxMDMqbZ-FaQFvoI3aNBKOBJGQfg/viewform?usp=header';
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert(`Error processing your request: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-5xl font-display font-black text-primary">Request Received!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for your detailed request. A moving expert will analyze your requirements and send a competitive quote to <strong>{formData.email}</strong> shortly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-secondary font-black hover:underline"
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Context & Trust */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4 leading-tight">Request a <br/>Detailed Quote</h2>
              <p className="text-lg text-gray-600">
                Provide a few details about your move and our logistics experts will send a competitive quote tailored to your exact requirements.
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfrE2j9Pbu9-QQQAMoK7ZqxMDMqbZ-FaQFvoI3aNBKOBJGQfg/viewform?usp=header" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-secondary group block"
              >
                <div className="bg-red-50 text-secondary p-2 rounded-lg group-hover:bg-red-100 transition-colors">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">Local & Long Distance</h4>
                  <p className="text-gray-500 text-sm">Serving across Canada with a specialized fleet.</p>
                </div>
              </a>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfrE2j9Pbu9-QQQAMoK7ZqxMDMqbZ-FaQFvoI3aNBKOBJGQfg/viewform?usp=header" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-primary group block"
              >
                <div className="bg-blue-50 text-primary p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Box size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary transition-colors">Packing & Unpacking</h4>
                  <p className="text-gray-500 text-sm">Full service options for a zero-effort transition.</p>
                </div>
              </a>
            </div>
            
            <div className="p-8 bg-primary-container rounded-2xl text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
                <p className="opacity-80 mb-6">Call our direct line for an immediate phone consultation.</p>
                <a className="text-2xl font-bold text-red-400 flex items-center space-x-2 hover:scale-105 transition-transform origin-left" href="tel:+16475145024">
                  <HelpCircle size={24} />
                  <span>+1 647 514 5024</span>
                </a>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            </div>
          </div>

          {/* Right Side: Kinetic Quote Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-50"
            >
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-primary uppercase tracking-widest">Step {step} of 3</span>
                  <span className="text-xs font-black text-gray-400">{Math.round((step/3)*100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className={`bg-secondary h-full transition-all duration-700`} style={{ width: `${(step/3)*100}%` }} />
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-primary uppercase tracking-wider">Moving From</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input 
                            required
                            value={formData.fromAddress}
                            onChange={e => setFormData({...formData, fromAddress: e.target.value})}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-gray-50" 
                            placeholder="Origin point" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-primary uppercase tracking-wider">Moving To</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input 
                            required
                            value={formData.toAddress}
                            onChange={e => setFormData({...formData, toAddress: e.target.value})}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-gray-50" 
                            placeholder="Destination point" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-black text-primary uppercase tracking-wider">Select Service Type</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Residential', 'Commercial', 'Same Day', 'Last Minute'].map(type => (
                          <button 
                            key={type}
                            type="button" 
                            onClick={() => setFormData({...formData, moveType: type})}
                            className={`border-2 p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all ${formData.moveType === type ? 'border-secondary bg-red-50 text-primary shadow-md' : 'border-gray-100 text-gray-400 hover:border-primary hover:text-primary'}`}
                          >
                            {type === 'Residential' && <Truck size={32} />}
                            {type === 'Commercial' && <Box size={32} />}
                            {type === 'Same Day' && <HelpCircle size={32} />}
                            {type === 'Last Minute' && <ShieldCheck size={32} />}
                            <span className="font-bold text-sm">{type}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <button type="button" onClick={nextStep} className="w-full bg-primary text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2">
                      CONTINUE <ChevronRight size={20} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-primary uppercase tracking-wider">Move Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input 
                            required
                            type="date"
                            value={formData.moveDate}
                            onChange={e => setFormData({...formData, moveDate: e.target.value})}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary outline-none bg-gray-50" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-primary uppercase tracking-wider">Home Size</label>
                        <select 
                          value={formData.homeSize}
                          onChange={e => setFormData({...formData, homeSize: e.target.value})}
                          className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary outline-none bg-gray-50 appearance-none"
                        >
                          <option>Studio</option>
                          <option>1 Bedroom</option>
                          <option>2 Bedroom</option>
                          <option>3+ Bedroom</option>
                          <option>Office Space</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-primary uppercase tracking-wider">Inventory Details</label>
                      <textarea 
                        value={formData.details}
                        onChange={e => setFormData({...formData, details: e.target.value})}
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary outline-none bg-gray-50 min-h-[120px]" 
                        placeholder="List large furniture or fragile items..."
                      />
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 border-2 border-primary text-primary py-5 rounded-xl font-bold">BACK</button>
                      <button type="button" onClick={nextStep} className="flex-[2] bg-primary text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2">CONTINUE <ChevronRight size={20} /></button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <div className="space-y-6">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 outline-none bg-gray-50" placeholder="Full Name" />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 outline-none bg-gray-50" placeholder="Email Address" />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 outline-none bg-gray-50" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="flex-1 border-2 border-primary text-primary py-5 rounded-xl font-bold">BACK</button>
                      <button disabled={isSubmitting} type="submit" className="flex-[2] bg-secondary text-white py-5 rounded-xl font-black text-xl shadow-xl disabled:opacity-50">
                        {isSubmitting ? 'SENDING...' : 'GET MY QUOTE'}
                      </button>
                    </div>
                  </motion.div>
                )}

                <p className="text-center text-gray-400 text-sm mt-6">
                  By clicking, you agree to our <Link className="underline hover:text-primary" to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
