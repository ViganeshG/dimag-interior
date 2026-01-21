
import React from 'react';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=1000" 
              alt="Designer" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4AF37] -z-10 hidden md:block" />
          </div>
          
          <div>
            <SectionHeading 
              title="Where Architecture Meets Soul" 
              subtitle="The Story of Spacesco" 
            />
            <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-6 font-light">
              Founded in 2012 by creative director Marcus Sterling, Spacesco was born out of a desire to move beyond trend-driven design towards spaces that possess a distinct atmosphere—a palpable vibe that reflects the dweller's inner world.
            </p>
            <p className="text-[#1A1A1A]/60 leading-relaxed mb-8">
              Our studio is a collective of architects, interior designers, and fine artisans. We don't just furnish rooms; we curate experiences. Our signature style is a blend of quiet luxury, functional minimalism, and high-impact focal points.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="text-4xl font-serif text-[#D4AF37]">12+</span>
                <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Years Excellence</p>
              </div>
              <div>
                <span className="text-4xl font-serif text-[#D4AF37]">450+</span>
                <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Projects Completed</p>
              </div>
              <div>
                <span className="text-4xl font-serif text-[#D4AF37]">15</span>
                <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Design Awards</p>
              </div>
              <div>
                <span className="text-4xl font-serif text-[#D4AF37]">4</span>
                <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">Global Offices</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <SectionHeading title="The Core Pillars" subtitle="Our Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-4 italic">Timelessness</h3>
              <p className="text-sm text-[#1A1A1A]/60">We design for the decades, not the seasons. Quality materials and classic proportions ensure longevity.</p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-4 italic">Intentionality</h3>
              <p className="text-sm text-[#1A1A1A]/60">Every line, shadow, and texture serves a purpose. We eliminate the noise to find the essence.</p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-4 italic">Integrity</h3>
              <p className="text-sm text-[#1A1A1A]/60">Honesty in materials and transparency in process. We build relationships as sturdy as our structures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
