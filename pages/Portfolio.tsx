
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { PROJECTS } from '../constants';
import { Category, Project } from '../types';
import { X, Calendar, MapPin, User, Square } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Category[] = ['All', 'Architecture', 'Interiors', 'Construction', 'Remodelling'];
  const categoryDescriptions: Partial<Record<Category, string>> = {
    Architecture: `Residential projects are the prime focus of our business. We detail each project with personality, consider the client's lifestyle, and tailor the proportioning of every home. It is through this pursuit of ‘custom’ that makes each project memorable.`,
    Interiors: `Retail, hospitality, both free standing and tenant buildout projects require a skilled hand, an organized leader, and a creative vision to create a place that contributes to, not detracts from, it’s neighborhood. As building code and city ordinances change, we make it a priority to design clear, elegant projects that our clients love.`,
    Construction: `Remodel projects can be challenging, but that does not mean they have to be difficult. We work along side knowledgeable general contractors to direct remodel projects, so design intent is achieved, budget is respected, and unforeseen circumstances are resolved. Our effort is to have remodel work that is seamless and beautiful.`,
    //Remodelling: `Remodel projects can be challenging, but that does not mean they have to be difficult. We work along side knowledgeable general contractors to direct remodel projects, so design intent is achieved, budget is respected, and unforeseen circumstances are resolved. Our effort is to have remodel work that is seamless and beautiful.`
  };
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Masterpieces in Living" 
          subtitle="Our Portfolio" 
          centered 
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 border-b-2 ${filter === cat ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-[#1A1A1A]/40 hover:text-[#1A1A1A]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {categoryDescriptions[filter] && (
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
              {filter}
            </h3>
            <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
              {categoryDescriptions[filter]}
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer overflow-hidden aspect-[4/5]"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center text-white">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">{project.category}</span>
                <h3 className="text-2xl font-serif">{project.title}</h3>
                <div className="mt-6 w-10 h-[1px] bg-white group-hover:w-20 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className="relative z-10 bg-[#FAF9F6] w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl">
            <button 
              className="absolute top-4 right-4 z-20 bg-[#1A1A1A] text-white p-2 hover:bg-[#D4AF37] transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            
            <div className="w-full md:w-2/3 h-64 md:h-auto">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-1/3 p-10 flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-2">{selectedProject.category}</span>
              <h2 className="text-4xl font-serif mb-6">{selectedProject.title}</h2>
              <p className="text-[#1A1A1A]/70 leading-relaxed mb-10 font-light">
                {selectedProject.description}
              </p>
              
              <div className="space-y-4 mb-10 border-t border-b border-[#1A1A1A]/10 py-6">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#1A1A1A]/60">
                  <User size={14} className="text-[#D4AF37]" /> {selectedProject.clientName}
                </div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#1A1A1A]/60">
                  <MapPin size={14} className="text-[#D4AF37]" /> {selectedProject.location}
                </div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#1A1A1A]/60">
                  <Calendar size={14} className="text-[#D4AF37]" /> Year: {selectedProject.year}
                </div>
                {selectedProject.builtupArea && (
                  <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#1A1A1A]/60">
                    <Square size={14} className="text-[#D4AF37]" /> Built-up Area: {selectedProject.builtupArea.toLocaleString()} Sft
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <Button className="w-full" variant="outline" onClick={() => {
                  window.location.hash = '/contact';
                  setSelectedProject(null);
                }}>Request Similar Design</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
