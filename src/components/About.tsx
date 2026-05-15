import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">About S&A Movers</h2>
            <p className="text-lg opacity-80 mb-6 leading-relaxed">
              At S & A Movers, we provide a complete relocation solution designed to make your transition smooth, organised, and stress-free. We understand that moving is more than just transporting items it involves preparing spaces, handling belongings with care, and ensuring everything is clean and ready for the next stage.
            </p>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Our service combines professional moving expertise with thorough smooth support, allowing you to manage your entire relocation process with one reliable team.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Experienced & Professional Team",
                "Comprehensive Services",
                "Customer Satisfaction Focused",
                "Local & Long Distance",
                "Commercial & Office Relocation",
                "Residential Moving"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa2DtoI7QYV6Es4HPKBKSsuEYLMtaKRvksVqW6ReJhI4aAASMJslX5_3kQU7PLZXK2jqp94vtlUmOlea5zpM6EWFVSiibcNOSN4E_qYQ1WREwWd8rnm4dQ2MZi4MgT4qkowoXhuFeHY89ypNNaCsi6Dzrw7uXPuU1UFEvTabpcCVV-SNxPtVW8yQRAZ2ti_DSYmCD5XhfKU-ATm-0XQSvF65rKa_naU2Ppfpi0mvRlQnMJ02kHyOlM3dgaCMMmCqxw3d0pUhjcipM" 
                alt="S&A Movers Operations" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-2xl font-bold">Trusted Experts</p>
                <p className="opacity-70">Serving GTA since 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
