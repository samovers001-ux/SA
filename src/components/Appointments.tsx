import { CheckCircle2, ChevronLeft, ChevronRight, Mail, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState("11:00 AM");

  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const times = ["09:00 AM", "11:00 AM", "01:30 PM", "04:00 PM"];

  return (
    <section id="contact" className="relative bg-primary py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white">
          <h2 className="text-5xl font-display font-bold mb-6">Appointments</h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-lg">
            Easily schedule your moving or cleaning service with our simple and convenient appointment booking system. At S&A Movers, we understand that your time is valuable, so we've made it quick and hassle-free to choose a date and time that works best for you. Whether you need assistance with an apartment move, office relocation, or professional cleaning, you can book your service in just a few clicks.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-secondary" size={20} />
              <span className="font-bold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-secondary" size={20} fill="currentColor" />
              <span className="font-bold">5-Star Rated Professional Team</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-secondary" size={20} />
              <a href="mailto:info@sandamovers.ca" className="font-bold hover:text-secondary transition-colors underline decoration-dotted decoration-white/30 underline-offset-4">info@sandamovers.ca</a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-2xl p-6 md:p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-primary">Select Date & Time</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-7 text-center text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {/* Padding for month start */}
              <div className="aspect-square flex items-center justify-center text-gray-200">29</div>
              <div className="aspect-square flex items-center justify-center text-gray-200">30</div>
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`aspect-square flex items-center justify-center rounded-lg font-bold transition-all
                    ${selectedDate === date 
                      ? 'bg-secondary text-white shadow-lg shadow-orange-200 ring-4 ring-orange-100' 
                      : 'hover:bg-gray-50 text-gray-700'
                    }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Available Slots</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`py-3 px-4 rounded-lg font-bold transition-all border
                    ${selectedTime === t
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-primary'
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <a 
            href="https://forms.gle/PQYducKjrjF22b1v5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg active:scale-95 block text-center"
          >
            Confirm Appointment
          </a>
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none hidden lg:block">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZq4DbdB5MBWIEzSoEyOv4vwmVJ8qF_Mg8ip0aaj3GNkSKODakI6B6KYKhYE45KcJXsGgEI5ot11ghSZan1wJoCsc4a6lNnZjmor9HEt-wHw31zKOoKMAWjA69npPC55GZxCvDxVKplf8yBkMYCxUTIfYS7CCajuLTx4k6_wdcnsHhyHBQ-ybPHvq4bXGzRKwMTtnF0bqZ_lqgTTatxFaEK3lWiU7zgF8m4xJOQOPzOhI_GsAk-8qwFDrdWaiSZI-XgUl9f-M_Nus" 
          className="h-full w-full object-cover" 
          alt="Calendar" 
        />
      </div>
    </section>
  );
}
