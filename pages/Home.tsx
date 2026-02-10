
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Star, Layout, Briefcase, Maximize, Hammer } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { PROJECTS, SERVICES, TESTIMONIALS, FAQS } from '../constants';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const ServiceIcons = {
    Home: Layout,
    Briefcase: Briefcase,
    Maximize: Maximize,
    Hammer: Hammer
  };

  // Get the first 3 projects for the home section
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight max-w-4xl animate-fade-in">
            Elevate Your <span className="italic">Everyday</span> Living
          </h1>
          <p className="text-lg md:text-xl tracking-widest font-light mb-10 max-w-2xl mx-auto opacity-90">
            PREMIUM INTERIOR DESIGN TAILORED TO YOUR SPACES
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button className="!bg-[#D4AF37] !border-[#D4AF37]">View Projects</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-[#1A1A1A]">Consultation</Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white opacity-50" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Our Design Philosophy" 
            subtitle="Curated Services" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service) => {
              const Icon = ServiceIcons[service.icon as keyof typeof ServiceIcons] || Layout;
              return (
                <div key={service.id} className="group p-8 bg-white border border-[#1A1A1A]/5 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-[#FAF9F6] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-500">
                    <Icon className="text-[#D4AF37] group-hover:text-white transition-colors duration-500" size={24} />
                  </div>
                  <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed mb-6">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Exceptional Environments" 
            subtitle="Selected Works" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id} 
                to="/portfolio"
                className="group relative overflow-hidden aspect-[4/5] block"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center text-white">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">{project.category}</span>
                  <h3 className="text-2xl font-serif">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline" className="mx-auto flex items-center gap-3 group">
                Explore Full Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Witness the Transformation" 
                subtitle="The Process" 
              />
              <p className="text-[#1A1A1A]/70 leading-relaxed mb-8 text-lg">
                We believe every space has hidden potential. Our design process meticulously uncovers this potential, balancing heritage with contemporary luxury. Drag the slider to see how we reimagined a classic Manhattan loft.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-sm tracking-wide">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" /> Initial Spatial Analysis
                </li>
                <li className="flex items-center gap-4 text-sm tracking-wide">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" /> 3D Material Visualization
                </li>
                <li className="flex items-center gap-4 text-sm tracking-wide">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" /> Bespoke Furniture Curation
                </li>
              </ul>
              <Link to="/services">
                <Button>Learn Our Method</Button>
              </Link>
            </div>
            <div className="shadow-2xl">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Voices of Elegance" 
            subtitle="Client Stories" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#FAF9F6] p-10 border border-[#1A1A1A]/5 italic">
                <div className="flex mb-6 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-8 font-light text-lg">"{t.content}"</p>
                <div>
                  <h4 className="font-serif not-italic text-lg">{t.name}</h4>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-semibold not-italic mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading 
            title="Common Inquiries" 
            subtitle="FAQ" 
            centered 
          />
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-[#1A1A1A]/10 pb-6">
                <button 
                  className="w-full flex justify-between items-center text-left py-2 group"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-serif text-xl group-hover:text-[#D4AF37] transition-colors">{faq.question}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-[#1A1A1A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://picsum.photos/id/10/1920/1080" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to define your space?</h2>
          <p className="text-lg opacity-60 mb-12 font-light">Join our elite clientele and experience interior design without compromise with Spacesco.</p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="!bg-[#D4AF37] !border-[#D4AF37]">Book a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
