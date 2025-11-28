import React from 'react';
import { ArrowUpRight, Check, Zap, Target, Users, ShieldCheck, TrendingUp, Search } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">O Potencial da IA</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Em 7 Dias, você ganha…</p>
        </div>

        {/* New Grid Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
                {
                    title: "Mapeamento Completo",
                    text: "Mapeamento completo do fluxo de trabalho atual",
                    icon: Search,
                },
                {
                    title: "Automações Reais",
                    text: "Automações reais implementadas (não apenas sugestões)",
                    icon: Zap,
                },
                {
                    title: "Redução de Tarefas",
                    text: "Redução de tarefas manuais e repetitivas",
                    icon: Target,
                },
                {
                    title: "IA Operacional",
                    text: "Estruturas de IA operacionais no dia-a-dia",
                    icon: Users,
                },
                {
                    title: "Organização Interna",
                    text: "Melhoria na comunicação e organização interna",
                    icon: ShieldCheck,
                },
                {
                    title: "Produtividade Imediata",
                    text: "Aumento imediato da produtividade",
                    icon: TrendingUp,
                }
            ].map((item, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text.replace('🔹', '')}</p>
                </div>
            ))}
        </div>

        {/* Redesigned Implementation/Guarantee Box */}
        <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>
                
                <div className="p-8 md:p-12 text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
                        Garantia de Risco Zero
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Implementação Rápida. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Impacto Imediato.</span>
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        E se não transformar o seu trabalho? <br/>
                        <span className="font-bold text-gray-900">Não paga nada.</span> Simples assim.
                    </p>
                    
                    <a 
                        href="https://www.lummoo.com/diagnostico" 
                        className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-800 hover:scale-105 shadow-lg group"
                    >
                        Agende já o seu Diagnóstico GRATUITO
                        <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                     <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
                     <div className="absolute -left-20 -top-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;