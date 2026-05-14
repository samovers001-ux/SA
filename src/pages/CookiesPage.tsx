import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Cookie, Shield, BarChart, Target, Settings, Info, Mail } from 'lucide-react';
import { useState } from 'react';

export default function CookiesPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false
  });

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
              <h1 className="text-5xl font-display font-extrabold text-primary mb-4">Cookie Settings</h1>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Cookie Preferences</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
              <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <Cookie size={32} />
                </div>
                <div className="space-y-4">
                  <p className="text-xl leading-relaxed m-0">
                    S & A Movers uses cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services.
                  </p>
                  <p className="text-gray-500 m-0">
                    By continuing to use our website, you agree to our use of cookies in accordance with our <a href="/privacy-policy" className="text-secondary underline">Privacy Policy</a>.
                  </p>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
                  <Settings className="text-secondary" />
                  Manage Cookie Preferences
                </h2>

                <div className="space-y-4">
                  {/* Essential */}
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-center justify-between gap-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-green-100 p-3 rounded-xl text-green-600">
                        <Shield size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold m-0 block">Essential Cookies (Always Active)</h3>
                        <p className="text-sm text-gray-500 mt-1">Required for the website to function properly.</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Website security", "Form submissions", "Booking requests", "Navigation and accessibility"].map(t => (
                            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-md">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 text-green-600 font-bold flex items-center gap-2">
                      <span className="text-sm">Enabled</span>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div 
                    onClick={() => togglePreference('analytics')}
                    className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-center justify-between gap-6 cursor-pointer hover:border-primary transition-colors"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                        <BarChart size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold m-0">Analytics Cookies</h3>
                        <p className="text-sm text-gray-500 mt-1">Help us understand how visitors use our website.</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences.analytics ? 'bg-primary' : 'bg-gray-200'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.analytics ? 'right-1' : 'left-1'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Functional */}
                  <div 
                    onClick={() => togglePreference('functional')}
                    className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-center justify-between gap-6 cursor-pointer hover:border-primary transition-colors"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                        <Settings size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold m-0">Functional Cookies</h3>
                        <p className="text-sm text-gray-500 mt-1">Allow enhanced website features and personalization.</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences.functional ? 'bg-primary' : 'bg-gray-200'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.functional ? 'right-1' : 'left-1'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div 
                    onClick={() => togglePreference('marketing')}
                    className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-center justify-between gap-6 cursor-pointer hover:border-primary transition-colors"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                        <Target size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold m-0">Marketing Cookies</h3>
                        <p className="text-sm text-gray-500 mt-1">Used to deliver relevant advertisements and track performance.</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences.marketing ? 'bg-primary' : 'bg-gray-200'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.marketing ? 'right-1' : 'left-1'}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <Info size={24} />
                  <h2 className="text-2xl font-bold uppercase tracking-tight m-0">Third-Party Services</h2>
                </div>
                <p>Our website may use third-party tools and integrations including:</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {["Google", "Zoho", "Calendly", "Payment providers", "Analytics providers"].map(service => (
                    <span key={service} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600">{service}</span>
                  ))}
                </div>
                <p className="mt-4 italic text-sm">These third parties may use cookies according to their own privacy policies.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">How to Control Cookies</h2>
                <p>Most browsers allow you to block cookies, delete stored cookies, or manage permissions. Browser settings can usually be found under:</p>
                <div className="flex gap-4">
                  {["Settings", "Privacy", "Security"].map(step => (
                    <div key={step} className="bg-gray-50 px-4 py-2 rounded-lg font-bold border border-gray-100">{step}</div>
                  ))}
                </div>
                <p className="text-sm bg-red-50 p-4 rounded-xl text-red-600 font-bold border border-red-100">
                  Disabling certain cookies may affect website functionality.
                </p>
              </section>

              <section className="bg-primary text-white p-10 rounded-3xl space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={32} />
                  <h2 className="text-3xl font-display font-bold m-0">Contact Information</h2>
                </div>
                <div className="space-y-2 opacity-90">
                  <p className="text-xl font-bold">S & A Movers</p>
                  <p>Ontario, Canada</p>
                  <p>Email: <a href="mailto:info@example.com" className="underline hover:text-secondary transition-colors">info@example.com</a></p>
                  <p>Website: <a href="https://sandamovers.ca" className="underline hover:text-secondary transition-colors">sandamovers.ca</a></p>
                </div>
                <button 
                  onClick={() => alert('Preferences Saved!')}
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all shadow-xl"
                >
                  Save My Preferences
                </button>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
