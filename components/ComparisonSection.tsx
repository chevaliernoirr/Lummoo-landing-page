import React from 'react';
import { X, Check, AlertCircle } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Antes e Depois</h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Before Card - Traditional Office */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500"></div>
                
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            Escritório Tradicional
                            <AlertCircle className="w-5 h-5 text-red-500" />
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">O modo de operação padrão</p>
                    </div>
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Antes
                    </span>
                </div>

                <ul className="space-y-3">
                    {[
                        "150+ emails por dia",
                        "6–12 horas semanais perdidas em tarefas administrativas",
                        "Falta de padronização",
                        "Equipa exausta",
                        "Clientes à espera",
                        "Escrita repetitiva e manual",
                        "Falta de previsibilidade e escala"
                    ].map((item, idx) => (
                        <li key={idx} className="bg-white border border-gray-100 p-4 rounded-xl flex items-start gap-3 shadow-sm transition-transform hover:scale-[1.01]">
                            <div className="mt-0.5 min-w-[20px]">
                                <X className="w-5 h-5 text-red-500" />
                            </div>
                            <span className="text-gray-800 font-medium leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* After Card - Smart Office */}
            <div className="bg-[#0F1115] text-white border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden lg:-mt-4 lg:mb-4">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
                
                <div className="mb-8 flex items-center justify-between relative z-10">
                     <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            Escritório Inteligente
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">Com Automação e IA</p>
                    </div>
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg shadow-blue-900/50">
                        Depois
                    </span>
                </div>

                <ul className="space-y-3 relative z-10">
                    {[
                        "Respostas semi-automáticas e organizadas",
                        "Minutas criadas e otimizadas em minutos",
                        "Fluxos que funcionam sozinhos",
                        "Zero tarefas repetitivas",
                        "Organização que aumenta a performance",
                        "Equipa mais leve e produtiva",
                        "Sócios focados no trabalho de alto valor"
                    ].map((item, idx) => (
                        <li key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="mt-0.5 min-w-[20px] w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-gray-100 font-medium leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;