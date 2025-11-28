import React from 'react';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-6 shadow-sm rotate-3 transform transition-transform hover:rotate-6">
                <Briefcase className="w-8 h-8 text-gray-900" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Para Quem é?</h2>
            <p className="text-xl text-gray-500">A solução ideal para escritórios que querem crescer.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Se você se identifica com:</h3>
                 <div className="space-y-4">
                    {[
                        "Sócios com excesso de tarefas administrativas",
                        "Equipas sobrecarregadas e desmotivadas",
                        "Advogados que desejam qualidade de vida",
                        "Escritórios que querem utilizar IA com segurança"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 transition-colors hover:border-blue-200 hover:bg-blue-50/30">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
                 {/* Visual representation - Simple illustration placeholder */}
                 <div className="relative w-full aspect-square max-w-sm bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white opacity-50"></div>
                    <div className="relative z-10 text-center p-6">
                        <p className="text-6xl font-black text-gray-300 select-none">IA</p>
                        <p className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-widest">Automação</p>
                    </div>
                 </div>
            </div>
        </div>

        {/* High Contrast Guarantee Box */}
        <div className="bg-[#2563eb] text-white p-10 md:p-14 rounded-3xl shadow-2xl shadow-blue-900/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl font-medium mb-6 text-blue-100">
                    Se, após 7 dias, o seu escritório não sentir melhoria real na operação…
                </p>
                <div className="bg-white/10 backdrop-blur-md inline-block px-6 py-2 rounded-lg border border-white/20 mb-8">
                    <p className="text-3xl md:text-4xl font-bold text-white">
                        👉 não paga nada.
                    </p>
                </div>
                <p className="text-sm text-blue-200 mb-10 font-medium tracking-wide">
                    SEM LETRAS PEQUENAS. SEM COMPLICAÇÕES.
                </p>

                <a 
                    href="https://www.lummoo.com/diagnostico" 
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-blue-600 transition-all duration-200 bg-white rounded-full hover:bg-gray-50 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                    COMEÇAR AGORA
                    <ArrowRight className="ml-2 w-5 h-5" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;