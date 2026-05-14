import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Shield, Lock, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              <h1 className="text-5xl font-display font-extrabold text-primary mb-4">Privacy Policy</h1>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Effective Date: May 2026</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <p className="text-xl leading-relaxed italic text-primary/80">
                  S & A Movers respects your privacy and is committed to protecting your personal information in accordance with applicable Canadian privacy laws, including PIPEDA (Personal Information Protection and Electronic Documents Act).
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <FileText size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight m-0">1. Information We Collect</h2>
                </div>
                <p>We may collect:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
                  {["Full name", "Email address", "Phone number", "Pickup and delivery addresses", "Booking details", "Service requests", "Payment-related information"].map((item) => (
                    <li key={item} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <Shield size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight m-0">2. How We Use Information</h2>
                </div>
                <p>Your information may be used to:</p>
                <ul className="space-y-2 list-none p-0">
                  {["Provide moving services", "Process bookings and quotes", "Contact you regarding appointments", "Improve customer service", "Send service updates or confirmations"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary mt-4">
                  <p className="font-bold text-primary m-0">We do not sell personal information.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">3. Consent</h2>
                <p>By submitting forms or using our services, you consent to the collection and use of your information as described in this Privacy Policy.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">4. Information Sharing</h2>
                <p>We may share information only when necessary with:</p>
                <ul className="space-y-2 list-none p-0">
                  {["Employees or contractors", "Service providers", "Legal authorities when required by law"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <Lock size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight m-0">5. Data Security</h2>
                </div>
                <p>We use reasonable safeguards to protect customer information from unauthorized access, misuse, or disclosure.</p>
                <p className="text-sm bg-gray-50 p-4 rounded-lg italic">However, no online transmission or storage system is guaranteed to be completely secure.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">6. Cookies & Website Analytics</h2>
                <p>Our website may use cookies or analytics tools to:</p>
                <ul className="space-y-2 list-none p-0">
                  {["Improve website performance", "Understand visitor behaviour", "Enhance user experience"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>Users may disable cookies through browser settings.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">7. Third-Party Services</h2>
                <p>Our website may contain links or integrations with third-party services including:</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {["Google", "Calendly", "Zoho", "Payment providers"].map(service => (
                    <span key={service} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600">{service}</span>
                  ))}
                </div>
                <p className="mt-4">We are not responsible for third-party privacy practices.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">8. Access & Correction</h2>
                <p>Customers may request access to or correction of their personal information by contacting us directly.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy periodically. Updated versions will be posted on our website.</p>
              </section>

              <section className="bg-primary text-white p-10 rounded-3xl space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={32} />
                  <h2 className="text-3xl font-display font-bold m-0">Contact Us</h2>
                </div>
                <div className="space-y-2 opacity-90">
                  <p className="text-xl font-bold">S & A Movers</p>
                  <p>Ontario, Canada</p>
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
