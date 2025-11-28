import React from 'react';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    Coimbra
                </h4>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                    Rua do Mercado<br/>
                    Souselas, Coimbra 3020-832
                </address>
                <div className="mt-4 text-xs text-gray-400">
                    Feito com <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline">Squarespace</a> (Reimagined in React)
                </div>
            </div>

            <div className="md:text-right">
                <h4 className="font-bold text-gray-900 mb-4">Sobre</h4>
                <nav className="flex flex-col md:items-end gap-2 text-sm text-gray-600">
                    <a href="https://www.lummoo.com/about" className="hover:text-black transition-colors">Quem Somos</a>
                    <a href="https://www.lummoo.com/contact" className="hover:text-black transition-colors">Contactos</a>
                </nav>
            </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} lummoo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;