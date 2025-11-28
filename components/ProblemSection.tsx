import React from 'react';
import { AlertCircle, Clock, FileText, Search, Mail, XCircle, ArrowDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">A realidade atual</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
            Apesar do crescimento das ferramentas de IA, a verdade é simples: <br className="hidden md:block"/>
            <span className="text-white font-semibold border-b-2 border-yellow-500 pb-1">a maior parte dos escritórios continua a trabalhar como em 2015.</span>
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: The Problem */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-red-500/10 rounded-lg">
                        <Clock className="w-5 h-5 text-red-400" />
                    </div>
                    Tarefas feitas manualmente:
                </h3>
                <ul className="space-y-4">
                    {[
                        { icon: Mail, text: "gestão de e-mails" },
                        { icon: Search, text: "triagem de clientes" },
                        { icon: FileText, text: "preparação de minutas padrão" },
                        { icon: Search, text: "pesquisas repetitivas" },
                        { icon: FileText, text: "organização de documentos" },
                        { icon: AlertCircle, text: "controles administrativos" },
                        { icon: Mail, text: "follow-ups e notificações" },
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300 group">
                            <item.icon className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                            {item.text}
                        </li>
                    ))}
                    <li className="flex items-center gap-3 text-gray-500 italic pl-7">outras…</li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                        … ainda são feitas <strong className="text-white">manualmente</strong>, consumindo horas valiosas de sócios e equipas.
                    </p>
                </div>
            </div>

            {/* Right Column: The Consequence */}
            <div className="space-y-10">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
                        Enquanto isso, os escritórios mais eficientes já:
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "automatizam fluxos completos",
                            "reduzem o tempo operacional",
                            "aumentam a capacidade de atendimento",
                            "reduzem erros humanos",
                            "ganham previsibilidade e produtividade diariamente"
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                <span className="text-lg text-gray-200">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-red-900/20 to-transparent border-l-4 border-red-500 pl-6 py-2">
                    <h4 className="font-bold text-red-400 mb-3 text-sm uppercase tracking-wider">Ignorar a IA hoje significa:</h4>
                    <ul className="grid gap-2">
                        {[
                            "Menos produtividade",
                            "Mais erros e retrabalho",
                            "Equipa sobrecarregada",
                            "Menos capacidade de escalar",
                            "Perder espaço para a concorrência"
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-300 font-medium text-sm">
                                <XCircle className="w-4 h-4 text-red-500/70 shrink-0" /> {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;