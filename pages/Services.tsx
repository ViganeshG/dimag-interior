
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';
import { Layout, Briefcase, Maximize, Hammer, ArrowRight, Sun, Palette, Leaf, Monitor } from 'lucide-react';

const Services: React.FC = () => {
  const ServiceIcons = {
    Home: Layout,
    Briefcase: Briefcase,
    Maximize: Maximize,
    Hammer: Hammer,
    Sun: Sun,
    Palette: Palette,
    Leaf: Leaf,
    Monitor: Monitor
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="The Art of Curation" 
          subtitle="Our Expertise" 
          centered 
        />
        
        <div className="space-y-32 mt-20">
          {SERVICES.map((service, idx) => {
            const Icon = ServiceIcons[service.icon as keyof typeof ServiceIcons] || Layout;
            const isEven = idx % 2 === 0;
            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden group aspect-video">
                    <img 
                      src={`https://images.unsplash.com/photo-${[
                        '1618221195710-dd6b41faaea6',
                        '1497366216548-37526070297c',
                        '1600607687920-4e2a09cf159d',
                        '1581092160562-40aa08e78837',
                        '1513506003901-1e6a229e2d15',
                        '1459411552884-841db9b3cc2a',
                        '1536412597336-ade7b523ec3f',
                        '1558655146-d09347e92766'
                      ][idx % 8]}?auto=format&fit=crop&q=80&w=1200`} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#D4AF37]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1A1A1A] text-white mb-8">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-4xl font-serif mb-6">{service.title}</h3>
                  <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-8">
                    {service.description} Beyond simple aesthetics, we provide a holistic approach that considers the architectural context, lifestyle patterns, and future adaptability of your space.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <li className="flex items-center gap-3 text-sm opacity-60"><ArrowRight size={14} className="text-[#D4AF37]" /> Expert Consultation</li>
                    <li className="flex items-center gap-3 text-sm opacity-60"><ArrowRight size={14} className="text-[#D4AF37]" /> Custom Procurement</li>
                    <li className="flex items-center gap-3 text-sm opacity-60"><ArrowRight size={14} className="text-[#D4AF37]" /> Precision Drafting</li>
                    <li className="flex items-center gap-3 text-sm opacity-60"><ArrowRight size={14} className="text-[#D4AF37]" /> Quality Assurance</li>
                  </ul>
                  <button 
                    onClick={() => window.location.hash = '/contact'}
                    className="text-[#D4AF37] uppercase text-xs font-bold tracking-[0.3em] flex items-center gap-4 hover:gap-6 transition-all duration-300"
                  >
                    Inquire About Service <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
