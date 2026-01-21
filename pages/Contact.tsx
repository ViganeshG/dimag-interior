
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real logic would happen here
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              title="Let's Curate Your Vision" 
              subtitle="Contact Us" 
            />
            <p className="text-lg text-[#1A1A1A]/70 mb-10 font-light">
              We're excited to hear about your project. Our team is available for domestic and international consultations.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D4AF37]/30">
                  <Mail className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-1">Email</h4>
                  <p className="font-medium">concierge@auradesign.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D4AF37]/30">
                  <Phone className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-1">Call Us</h4>
                  <p className="font-medium">+1 (555) 890-1234</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D4AF37]/30">
                  <MapPin className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-1">Studio</h4>
                  <p className="font-medium">120 Madison Ave, New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-20 h-20 bg-[#D4AF37] text-white rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-4">Message Received</h3>
                <p className="text-[#1A1A1A]/60">Our design concierge will contact you within 24 hours.</p>
                <Button variant="ghost" className="mt-8" onClick={() => setSubmitted(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Project Vision</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    placeholder="Tell us about your space..."
                  />
                </div>
                <Button type="submit" className="w-full">Send Inquiry</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
