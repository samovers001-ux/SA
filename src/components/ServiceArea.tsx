import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12">Service Area</h2>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=251+Manitoba+Street+M8Y+0C7+Etobicoke+ON"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] border border-gray-200 relative group"
        >
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMhPoP1alvfUbXIfMfFHIPdr4GH6foQklVwN5ZhhgLA5CM6HNCWk50KZ9yC2oQxd9aOhpv_DBNAefgOLlVDmfgpBgT85w8QZ9sEsR3qhhiFxFh08lZJZi8oZ-hXOpumUBrw5gi8BYd08amGRGEDuyIfYmo5y9__cWRO3tvnXwq5zGt1ELpjJVb4YNTFNlOcjfhCowqohOyOkhpRLt1r93ybnzOrBkvnE7wbKPhjLKlT7nQ5LzN8ZZUYKSIMhWCnsDdcmiD2DowFYs" 
            alt="Service Area Map" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white p-3 sm:p-4 rounded-lg shadow-xl flex items-center gap-4 border border-gray-100">
            <div className="bg-secondary p-2 rounded-full">
              <MapPin className="text-white" size={20} />
            </div>
            <span className="font-bold text-primary">Serving Toronto & GTA</span>
          </div>
        </a>
      </div>
    </section>
  );
}
