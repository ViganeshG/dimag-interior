
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#FAF9F6]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/Logos/Spacesco - Logo - Gradient Version.png" 
            alt="Spacesco Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => {
            const isHomePage = location.pathname === '/';
            const shouldBeWhite = isHomePage && !isScrolled;
            
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-[#D4AF37] ${
                  shouldBeWhite
                    ? (location.pathname === link.path ? 'text-[#D4AF37]' : 'text-white')
                    : (location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#1A1A1A]')
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden relative z-[60] hover:text-[#D4AF37] transition-colors ${
            location.pathname === '/' && !isScrolled ? 'text-white' : 'text-[#1A1A1A]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[45] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#FAF9F6] z-[50] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}`}>
        <button 
          className="absolute top-6 right-6 text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-serif hover:text-[#D4AF37] transition-colors ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
