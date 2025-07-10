import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className="hidden md:block bg-black/80 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-end gap-4">
          <a href="tel:8998101-7105" className="flex items-center hover:text-red-500 transition-colors text-xs md:text-sm">
            <Phone size={14} className="mr-1" /> 89 98101-7105
          </a>
          <a target="_blank" href="https://wa.me/5511991298838" className="flex items-center hover:text-red-500 transition-colors text-xs md:text-sm">
            <Phone size={14} className="mr-1" /> 11 99129-8838 (WhatsApp)
          </a>
          <a href="mailto:francisco.contatoportfolio@gmail.com" className="flex items-center hover:text-red-500 transition-colors text-xs md:text-sm">
            <Mail size={14} className="mr-1" /> francisco.contatoportfolio@gmail.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/Francisco-tads/GSET-Comunica-o-Visual/refs/heads/master/src/img/logo-gset2.png" 
              alt="GSET Comunicação Visual" 
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1">
            {['HOME', 'EMPRESA', 'PRODUTOS', 'CLIENTES', 'CONTATO'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="px-3 md:px-4 py-2 text-white hover:text-red-600 transition-colors uppercase text-xs md:text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-black/95 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-2">
            {['HOME', 'EMPRESA', 'PRODUTOS', 'CLIENTES', 'CONTATO'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 text-white hover:text-red-600 transition-colors uppercase text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="mt-4 space-y-2 border-t border-gray-700 pt-4">
            <a href="tel:8998101-7105" className="flex items-center text-white hover:text-red-500 transition-colors text-sm">
              <Phone size={14} className="mr-2" /> 89 98101-7105
            </a>
            <a target="_blank" href="https://wa.me/5511991298838" className="flex items-center text-white hover:text-red-500 transition-colors text-sm">
              <Phone size={14} className="mr-2" /> 11 99129-8838 (WhatsApp)
            </a>
            <a href="mailto:francisco.contatoportfolio@gmail.com" className="flex items-center text-white hover:text-red-500 transition-colors text-sm break-all">
              <Mail size={14} className="mr-2 flex-shrink-0" /> francisco.contatoportfolio@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;