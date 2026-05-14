import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { FileText, AlertCircle, Scale, ShieldCheck, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="border-b border-gray-100 pb-10">
              <h1 className="text-5xl font-display font-extrabold text-primary mb-4">Terms & Conditions</h1>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Effective Date: May 2026</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
              <p className="text-xl leading-relaxed">
                Welcome to S & A Movers. By using our website, booking services, or contacting our company, you agree to the following Terms & Conditions.
              </p>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <Scale size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight m-0">1. Services</h2>
                </div>
                <p>S & A Movers provides residential, commercial, local, and long-distance moving services within Canada. Services may include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Packing and unpacking", "Furniture moving", "Loading and unloading", "Transportation", "Moving assistance"].map(item => (
                    <div key={item} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <ShieldCheck className="text-secondary" size={18} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm italic">All services are subject to availability and confirmation.</p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <FileText size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight m-0">2. Quotes & Pricing</h2>
                </div>
                <p>Quotes provided online, by phone, or by email are estimates only. Final pricing may vary depending on:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
                  {["Distance", "Volume of items", "Access conditions", "Stairs/elevators", "Additional labour time", "Special handling requirements"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                       {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-6">
                  <p className="font-bold mb-3 text-primary">Additional charges may apply for:</p>
                  <ul className="space-y-1 list-none p-0">
                    {["Heavy items", "Delays outside company control", "Last-minute schedule changes", "Extra stops"].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-secondary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">3. Booking & Cancellation</h2>
                <ul className="space-y-3 list-none p-0">
                  <li className="flex gap-3">
                    <div className="font-bold text-secondary">3.1</div>
                    <p className="m-0">Customers must provide accurate booking information.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold text-secondary">3.2</div>
                    <p className="m-0">Deposits may be required for certain bookings.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold text-secondary">3.3</div>
                    <p className="m-0">Cancellation requests should be made at least 24 hours before the scheduled move.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="font-bold text-secondary">3.4</div>
                    <p className="m-0">Same-day cancellations may be subject to cancellation fees.</p>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">4. Customer Responsibilities</h2>
                <p>Customers are responsible for:</p>
                <ul className="space-y-2 list-none p-0">
                  {["Properly securing fragile or valuable items", "Ensuring accurate pickup and delivery details", "Obtaining parking permits if required", "Providing safe access to the property"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold">S & A Movers reserves the right to refuse unsafe or prohibited items.</p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-red-500 mb-4">
                  <AlertCircle size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight m-0">5. Restricted Items</h2>
                </div>
                <p>We do not transport:</p>
                <div className="flex flex-wrap gap-2">
                  {["Illegal goods", "Hazardous materials", "Explosives", "Flammable substances", "Perishable goods", "Weapons"].map(item => (
                    <span key={item} className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-sm font-bold border border-red-100">{item}</span>
                  ))}
                </div>
                <p className="text-sm italic">Customers remain fully responsible for undisclosed restricted items.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">6. Liability</h2>
                <p>While we handle belongings with care, S & A Movers is not liable for:</p>
                <ul className="space-y-2 list-none p-0 opacity-80">
                  <li>• Pre-existing damages</li>
                  <li>• Improperly packed items by customers</li>
                  <li>• Delays caused by weather, traffic, or unforeseen events</li>
                  <li>• Indirect or consequential losses</li>
                </ul>
                <p className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary">Damage claims must be reported within 48 hours after service completion.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">7. Website Use</h2>
                <p>Users agree not to misuse the website, attempt unauthorized access, submit false information, or disrupt website functionality. We reserve the right to update or modify website content at any time.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">8. Privacy</h2>
                <p>Your use of our services is also governed by our <a href="/privacy-policy" className="text-secondary underline font-bold">Privacy Policy</a>.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">9. Governing Law</h2>
                <p>These Terms & Conditions are governed by the laws of Ontario, Canada.</p>
              </section>

              <section className="bg-primary text-white p-10 rounded-3xl space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={32} />
                  <h2 className="text-3xl font-display font-bold m-0">Contact Information</h2>
                </div>
                <div className="space-y-2 opacity-90">
                  <p className="text-xl font-bold">S & A Movers</p>
                  <p>Etobicoke, Ontario, Canada</p>
                  <p>Email: <a href="mailto:info@sandamovers.ca" className="underline hover:text-secondary transition-colors">info@sandamovers.ca</a></p>
                  <p>Website: <a href="https://sandamovers.ca" className="underline hover:text-secondary transition-colors">sandamovers.ca</a></p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
