import { ShieldAlert, Clock, Brain, Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Kofi Mensah",
    location: "Toronto, ON",
    text: "Exceptional service! They handled our delicate furniture with so much care. Best moving experience in Toronto.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    name: "Sarah Miller",
    location: "Scarborough, ON",
    text: "Professional, fast, and very friendly. The team made my apartment move stress-free. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    name: "Amina Diop",
    location: "North York, ON",
    text: "S&A Movers are top-notch. Arrived on time and worked tirelessly. The pricing was transparent and fair.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  },
  {
    name: "Robert Wilson",
    location: "Etobicoke, ON",
    text: "I was worried about my grand piano, but these guys knew exactly what they were doing. Not a scratch anywhere!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5
  }
];

export default function Trust() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f17a21" className="text-secondary" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-secondary/20">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-primary text-sm">{review.name}</h5>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
