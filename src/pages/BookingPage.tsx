import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Truck, ChevronRight, CheckCircle2, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    moveDate: '',
    moveTime: '',
    fromAddress: '',
    toAddress: '',
    moveType: 'Local Moving Services',
    homeSize: '1 Bedroom',
    propertyArea: '35–55 m²',
    packingService: false,
    specialInstructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      console.log('Submitting booking...', formData);
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', response.status, errorText);
        throw new Error(`Server returned ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      if (result.success) {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfrE2j9Pbu9-QQQAMoK7ZqxMDMqbZ-FaQFvoI3aNBKOBJGQfg/viewform?usp=header';
      } else {
        alert(result.message || 'Something went wrong. Please try again or call us.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert(`Error processing your booking: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {['Details', 'Contact', 'Review'].map((s, i) => (
                <div key={s} className="flex flex-col items-center flex-1 relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 
                    ${step > i + 1 ? 'bg-secondary text-white' : step === i + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step > i + 1 ? <CheckCircle2 size={20} /> : i + 1}
                  </div>
                  <span className={`mt-2 text-xs font-bold uppercase tracking-wider ${step === i + 1 ? 'text-primary' : 'text-gray-400'}`}>
                    {s}
                  </span>
                  {i < 2 && (
                    <div className={`absolute top-5 left-1/2 w-full h-0.5 -z-0 ${step > i + 1 ? 'bg-secondary' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            key={isSubmitted ? 'success' : step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-primary">Request Sent!</h2>
                  <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                    Thank you for choosing S&A Movers. Your booking details have been sent to <a href="mailto:info@sandamovers.ca" className="font-bold text-primary hover:text-secondary underline decoration-dotted underline-offset-4 transition-colors">info@sandamovers.ca</a>. 
                    A moving coordinator will review your request and get back to you within 24 hours.
                  </p>
                  <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => window.location.href = '/'}
                      className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-container transition-all"
                    >
                      Return to Homepage
                    </button>
                    <a 
                      href="tel:+16475145024"
                      className="bg-gray-100 text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                    >
                      Call for Urgent Assistance
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Truck size={24} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-primary">Moving Details</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Move Type</label>
                      <select 
                        name="moveType"
                        value={formData.moveType}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option>Local Moving Services</option>
                        <option>Residential Moving</option>
                        <option>Long-Distance Moving</option>
                        <option>Commercial & Office Relocation</option>
                        <option>Same-Day Moving</option>
                        <option>Last-Minute Moving</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Home Size</label>
                      <select 
                        name="homeSize"
                        value={formData.homeSize}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option>Studio</option>
                        <option>1 Bedroom</option>
                        <option>2 Bedrooms</option>
                        <option>3+ Bedrooms</option>
                        <option>Townhouse</option>
                        <option>Full House</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Property Area (Sq Meter)</label>
                      <select 
                        name="propertyArea"
                        value={formData.propertyArea}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option>35 m²</option>
                        <option>35–55 m²</option>
                        <option>55–80 m²</option>
                        <option>80–110 m²</option>
                        <option>110–150 m²</option>
                        <option>150–200+ m²</option>
                        <option>200–300+ m²</option>
                        <option>300–400+ m²</option>
                        <option>400–500+ m²</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Pickup Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="text"
                          name="fromAddress"
                          placeholder="Street, City, Postal Code"
                          value={formData.fromAddress}
                          onChange={handleChange}
                          className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Delivery Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="text"
                          name="toAddress"
                          placeholder="Street, City, Postal Code"
                          value={formData.toAddress}
                          onChange={handleChange}
                          className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="date"
                          name="moveDate"
                          value={formData.moveDate}
                          onChange={handleChange}
                          className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select 
                          name="moveTime"
                          value={formData.moveTime}
                          onChange={handleChange}
                          className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                        >
                          <option value="">Select Time Slot</option>
                          <option>Morning (8am - 10am)</option>
                          <option>Mid-day (11am - 1pm)</option>
                          <option>Afternoon (2pm - 4pm)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                      <Shield size={24} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-primary">Contact Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">First Name</label>
                      <input 
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Last Name</label>
                      <input 
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-700">Special Instructions / Inventory Box Count</label>
                      <textarea 
                        name="specialInstructions"
                        rows={4}
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none"
                        placeholder="List large items, flight of stairs, or specific packing needs..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-display font-bold text-primary mb-4">Ready to Book!</h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Please review your details below. Once confirmed, our team will review your request and send a confirmation within 24 hours.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl text-left max-w-sm mx-auto space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Service:</span>
                      <span className="font-bold text-primary">{formData.moveType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-bold text-primary">{formData.homeSize} ({formData.propertyArea})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-bold text-primary">{formData.moveDate || 'Not set'}</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`bg-primary text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-container'}`}
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm & Complete Booking'}
                  </button>
                </div>
              )}
            </>
          )}

          {!isSubmitted && step < 3 && (
                <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
                  <button 
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`px-8 py-3 rounded-lg font-bold transition-colors ${step === 1 ? 'opacity-0 cursor-default' : 'text-gray-500 hover:bg-gray-100'}`}
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    className="bg-secondary text-white px-10 py-3 rounded-full font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-lg active:scale-95"
                  >
                    Next Step
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
