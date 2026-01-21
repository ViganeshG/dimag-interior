
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-10">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-3xl font-serif mb-6">Spacesco<span className="text-[#D4AF37]">.</span></h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Crafting soulful spaces that tell your unique story. Luxury minimalism for modern living.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-white/40 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-white/40 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-white/40 hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#D4AF37]">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#D4AF37]">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <MapPin size={16} /> 120 Designer Lane, NY 10001
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} /> +1 (555) 012-3456
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} /> hello@spacesco.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[#D4AF37]">Newsletter</h4>
          <p className="text-sm text-white/60 mb-4">Stay updated with our latest designs.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email"
              className="bg-transparent border-b border-white/20 py-2 w-full focus:outline-none focus:border-[#D4AF37] text-sm"
            />
            <button className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest ml-4">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center text-white/30 text-[10px] uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Spacesco Interior Design Agency. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
