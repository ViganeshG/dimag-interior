
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectVision: string;
}

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectVision: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Google Apps Script Web App URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycby9pqdnUmAF_yJiu9N43a7ZtStSLybv_ZrbUcF__Ngoe-XwwVk2YtwkKvs15zaCJHVrAA/exec';
      
      // Use hidden iframe approach for Google Apps Script to avoid CORS issues
      const iframeId = 'hidden_iframe_' + Date.now();
      const iframe = document.createElement('iframe');
      iframe.id = iframeId;
      iframe.name = iframeId;
      iframe.style.display = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      document.body.appendChild(iframe);
      
      // Create a form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = scriptUrl;
      form.target = iframeId;
      form.style.display = 'none';
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      
      // Handle success with cleanup
      let successHandled = false;
      const handleSuccess = () => {
        if (successHandled) return;
        successHandled = true;
        
        // Clean up DOM elements
        const formEl = document.getElementById(form.id) || form;
        const iframeEl = document.getElementById(iframeId);
        if (formEl && formEl.parentNode) {
          formEl.parentNode.removeChild(formEl);
        }
        if (iframeEl && iframeEl.parentNode) {
          iframeEl.parentNode.removeChild(iframeEl);
        }
        
        // Show success message
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          projectVision: ''
        });
        setLoading(false);
      };
      
      // Handle iframe load to detect completion
      iframe.onload = () => {
        setTimeout(handleSuccess, 500);
      };
      
      // Fallback timeout in case iframe.onload doesn't fire
      setTimeout(handleSuccess, 2000);
      
      form.submit();
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again or contact us directly.');
      console.error('Form submission error:', err);
      setLoading(false);
    }
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
                  <a href="mailto:preeth.archi@gmail.com" className="font-medium hover:text-[#D4AF37] transition-colors">preeth.archi@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D4AF37]/30">
                  <Phone className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-1">Call Us</h4>
                  <a href="tel:7411624737" className="font-medium hover:text-[#D4AF37] transition-colors">7411624737</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D4AF37]/30 flex-shrink-0">
                  <MapPin className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]/40 mb-1">Studio</h4>
                  <p className="font-medium">#5, Esther enclave, Jayanthi Nagar, Hormavu, Bengaluru 560043</p>
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
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="+91 7411624737"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-40">Project Vision</label>
                  <textarea 
                    rows={4}
                    name="projectVision"
                    value={formData.projectVision}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    placeholder="Tell us about your space..."
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
