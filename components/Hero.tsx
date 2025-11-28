import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gray-50 blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-600 mb-8 uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Sócio-gerente
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
          Transforme seu escritório em uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">máquina de produtividade</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Reduza 20-40% do trabalho admininstrativo com IA + Automação em 7 DIAS - ou não pague nada!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://www.lummoo.com/diagnostico" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Agende já o seu Diagnóstico GRATUITO
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Sem fidelização</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Resultados rápidos</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;