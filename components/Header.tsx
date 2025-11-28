import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          lummoo
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="https://www.lummoo.com/diagnostico" 
            className="bg-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Agende um Diagnóstico
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden flex flex-col items-center gap-4 shadow-xl">
          <a 
            href="https://www.lummoo.com/diagnostico" 
            className="w-full text-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Agende um Diagnóstico
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;