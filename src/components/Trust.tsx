import { ShieldAlert, Clock, Brain, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Trust() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">Why Thousands Trust S&A Movers Every Year</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <ShieldAlert className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary">Full Value Protection</h4>
                <p className="text-gray-600">Comprehensive insurance coverage for your peace of mind. Every box is protected from door to door.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary">Punctuality Guaranteed</h4>
                <p className="text-gray-600">We value your time. Our teams arrive on schedule and work efficiently to keep your move on track.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Brain className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary">Expert Packing</h4>
                <p className="text-gray-600">Our trained professionals use industry-best techniques to pack even the most fragile items securely.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-primary-container p-12 rounded-2xl border border-blue-400/10 relative overflow-hidden text-white shadow-2xl">
            <Quote size={80} className="absolute -right-4 -bottom-4 opacity-10" />
            <p className="text-2xl font-semibold italic mb-8 relative z-10 leading-relaxed font-display">
              "The team from S&A Movers was incredible. They moved our entire 4-bedroom house in a single day without a single scratch on anything. Highly professional and worth every penny."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="James Richardson" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xl font-bold font-display">James Richardson</p>
                <p className="text-sm font-bold opacity-60">Etobicoke, ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
