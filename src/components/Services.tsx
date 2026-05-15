import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const serviceData = [
  {
    title: "Residential Moving",
    description: "Personalized home and apartment relocation. We handle your furniture and valuables with extreme care and precision.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZq4DbdB5MBWIEzSoEyOv4vwmVJ8qF_Mg8ip0aaj3GNkSKODakI6B6KYKhYE45KcJXsGgEI5ot11ghSZan1wJoCsc4a6lNnZjmor9HEt-wHw31zKOoKMAWjA69npPC55GZxCvDxVKplf8yBkMYCxUTIfYS7CCajuLTx4k6_wdcnsHhyHBQ-ybPHvq4bXGzRKwMTtnF0bqZ_lqgTTatxFaEK3lWiU7zgF8m4xJOQOPzOhI_GsAk-8qwFDrdWaiSZI-XgUl9f-M_Nus"
  },
  {
    title: "Commercial Relocation",
    description: "Minimal downtime for your business. We handle office furniture, IT equipment, and sensitive documents.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhheUA3N6QOEJlT4ZlWci4_Q2G9FaSjo3VUpKaSB7vb2t4M0f_xgnX7N2wqrcNIuYaxqLFH1IMfSaMPRdHg8sd1y6o8efETdN3aCU1_ZvDuu7jZCyqljKFmEudW1zySA8AXOXucXb-HWUs9dCWgjFD56hZrDOmULrT8dpF3oYZFIpus7uxt-pLUHIYn2O3gC8DNfvfVJRk24J6DwfNuS2ZERhtFVwFKL3k-G_ok4f2QBRmLkiBrM1a7cXAlIamShiaNTknqhKB_GU"
  },
  {
    title: "Long Distance",
    description: "Coast-to-coast reliability. Real-time tracking and dedicated coordinators for your cross-country journey.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE2SLCsw_zeNygsbI06i5QIZlLfZf7S-DgUSqFLOLN2CQssFJwim8iGcVWEFne4AY915Ndv_4TGTTFlKrWHQ7hAJsrMEzztBV-DZ7zjhETMuC4dLZcqZGPYEpcJu0SYVDg8veAIhcXjYHLzIxMsCfSbXej9iLv33Q2kBIvGMegCskTDNl__jHhg7XX_7SzzvUCNI0tROzgRv3o9RYDOCXC_T-IwTw77RYCS5siqT6C6xyOv8QYUPAEJTFUvPw7w_i-POxkdTf8SnY"
  },
  {
    title: "Local Moving",
    description: "Expert navigation of GTA neighborhoods. Quick, efficient, and careful transit for your city relocation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEDJ8pe9d5A6fnmiOyJU3oZoswQL2bHLqVh3nNHlXT9b0h9cyaWvaYNMHRRJ6sWl0b9AUAst8umrIcp1mWomlxm1MlizzIzQtCYgjLiLgRJS09bzl8w4JBSO-4iyN2PKEMqvDZgdlm0_x2Fg35p2ncTN-zsMARp7efL7RLwNkAmIjXHLTrNKhNUpHkdQTv1seDSpTFqsxoy2RpAigkqpudqMCUPL5QxepUQKxPbSh9tv0esMmSsgiGF00JWcvzXNJ1qg4zD07Pfiw"
  },
  {
    title: "Same Day Moving",
    description: "Need to move today? Our rapid response teams are ready to handle immediate relocation requests safely.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa2DtoI7QYV6Es4HPKBKSsuEYLMtaKRvksVqW6ReJhI4aAASMJslX5_3kQU7PLZXK2jqp94vtlUmOlea5zpM6EWFVSiibcNOSN4E_qYQ1WREwWd8rnm4dQ2MZi4MgT4qkowoXhuFeHY89ypNNaCsi6Dzrw7uXPuU1UFEvTabpcCVV-SNxPtVW8yQRAZ2ti_DSYmCD5XhfKU-ATm-0XQSvF65rKa_naU2Ppfpi0mvRlQnMJ02kHyOlM3dgaCMMmCqxw3d0pUhjcipM"
  },
  {
    title: "Last Minute Moving",
    description: "Unexpected changes happen. We specialize in stress free, last minute moving solutions across the GTA.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Kf7ffjzitVSzCL-KnPSjQQ61V9VpolZd95sOBC3A3dZVlf9iT4C08pgUt1pKbDoAVR67jlm8sx7d2SVGm0GWM-vZ3mX2jJvvHg_FE5zOsx-UpEy6vNzWjEij9mk17zvrCP6oNJ6reUOvp-Qd8ri_pu9yvEeBBL1-M0qxNSkneQ5MMtsDjvFX6tWPBx89Ewa-kZES1IM5I-5o-DK7FvTt2_p4NLssuBSHq_mncsjijbed7033huJoE3d6gBUAMx7WIEBhK23poW4"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Professional Moving Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for every relocation need, executed with military precision and corporate care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={service.image} 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
                
                {/* Contextual Branding Overlays */}
                {service.title === "Last Minute Moving" && (
                  <div className="absolute top-[45%] left-[55%] -translate-x-1/2 bg-white/20 backdrop-blur-[1px] px-4 py-1 border border-white/10 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity skew-x-[-2deg] rotate-[-1deg]">
                    <p className="text-primary font-black text-xs uppercase tracking-tighter italic">S & A MOVERS</p>
                  </div>
                )}

                {service.title === "Same Day Moving" && (
                  <div className="absolute top-[60%] left-[45%] -translate-x-1/2 bg-[#d2b48c]/40 px-2 py-0.5 border border-black/5 opacity-70 group-hover:opacity-100 transition-opacity">
                    <p className="text-black/60 font-bold text-[8px] uppercase tracking-tighter">S & A MOVERS</p>
                  </div>
                )}

                {(service.title !== "Last Minute Moving" && service.title !== "Same Day Moving") && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded border border-primary/20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-primary font-black text-[10px] uppercase tracking-tighter">S & A MOVERS</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
                  LEARN MORE <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
