
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'The Essential',
      price: '$2,500',
      description: 'Perfect for single-room refreshes and conceptual guidance.',
      features: [
        'Mood board & Color Palette',
        '2D Floor Planning',
        'Furniture Curation List',
        'Material Samples',
        '1 Revision Round'
      ]
    },
    {
      name: 'The Signature',
      price: '$7,500',
      description: 'Our most popular choice for full-room transformations.',
      features: [
        'Photorealistic 3D Renders',
        'Technical Drawings',
        'Bespoke Furniture Design',
        'Lighting Design Plan',
        'Project Management Support',
        '3 Revision Rounds'
      ],
      popular: true
    },
    {
      name: 'The Legacy',
      price: 'Contact Us',
      description: 'Full-scale architectural and interior redesign for luxury estates.',
      features: [
        'Complete Home Overhaul',
        'Structural Consultation',
        'On-site White Glove Service',
        'Art Curation & Advisory',
        'Priority Timeline',
        'Unlimited Revisions'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Investment in Elegance" 
          subtitle="Transparent Tiers" 
          centered 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative p-10 flex flex-col border transition-all duration-500 ${tier.popular ? 'bg-white border-[#D4AF37] scale-105 shadow-2xl z-10' : 'bg-[#FAF9F6] border-[#1A1A1A]/10'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                  Most Preferred
                </div>
              )}
              
              <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
              <div className="text-3xl font-light text-[#D4AF37] mb-6">{tier.price}</div>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed mb-8">{tier.description}</p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#1A1A1A]/80">
                    <Check size={16} className="text-[#D4AF37]" /> {feature}
                  </li>
                ))}
              </ul>

              <Button variant={tier.popular ? 'primary' : 'outline'} className="w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-[#1A1A1A] text-white p-12">
          <h4 className="text-2xl font-serif mb-4">Need something bespoke?</h4>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">We understand that unique spaces require unique solutions. Contact our concierge for a tailored quotation.</p>
          <Button className="!border-[#D4AF37] !text-[#D4AF37] !bg-transparent hover:!bg-[#D4AF37] hover:!text-white">Custom Consultation</Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
