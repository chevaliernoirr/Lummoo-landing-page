import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, AlertTriangle, TrendingDown, Users, DollarSign, Clock } from 'lucide-react';

const Calculator: React.FC = () => {
  const [processesPerWeek, setProcessesPerWeek] = useState<number>(15);
  const [hoursPerProcess, setHoursPerProcess] = useState<number>(2.5);
  const [lawyersCount, setLawyersCount] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(100);

  const results = useMemo(() => {
    // Total admin hours spent by the firm per week
    const weeklyLostHours = processesPerWeek * hoursPerProcess; 
    const monthlyLostHours = weeklyLostHours * 4;
    const yearlyLostHours = weeklyLostHours * 52;
    
    // Financial Loss
    const weeklyMoneyLost = weeklyLostHours * hourlyRate;
    const yearlyMoneyLost = weeklyMoneyLost * 52;

    // FTE (Full Time Equivalent) wasted
    // Assuming 40h work week
    const fteWasted = weeklyLostHours / 40;

    return { 
        weeklyLostHours, 
        yearlyLostHours, 
        weeklyMoneyLost, 
        yearlyMoneyLost,
        fteWasted
    };
  }, [processesPerWeek, hoursPerProcess, hourlyRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                Simulador Financeiro
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                O Custo da Ineficiência
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                Tarefas manuais não custam apenas tempo. Custam dinheiro. <br/>
                Descubra quanto o seu escritório está a perder agora mesmo.
            </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
            {/* Left Side: Inputs */}
            <div className="p-8 md:p-10 lg:w-5/12 bg-gray-50 border-r border-gray-200 flex flex-col justify-center relative">
                <h3 className="text-lg font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <span className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm">1</span>
                    Dados do Escritório
                </h3>

                <div className="space-y-8">
                    {/* Input Group 1 */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Nº de Novos Processos (Semana)
                            </label>
                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{processesPerWeek}</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={processesPerWeek}
                            onChange={(e) => setProcessesPerWeek(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                        />
                    </div>

                    {/* Input Group 2 */}
                    <div>
                         <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Horas Admin. por Processo
                            </label>
                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{hoursPerProcess}h</span>
                        </div>
                        <input
                            type="range"
                            min="0.5"
                            max="20"
                            step="0.5"
                            value={hoursPerProcess}
                            onChange={(e) => setHoursPerProcess(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                        />
                        <p className="text-xs text-gray-400 mt-1">Ex: emails, arquivo, agendamento, minutas</p>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-4"></div>

                    {/* Input Group 3 */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Número de Advogados
                            </label>
                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{lawyersCount}</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="50"
                            value={lawyersCount}
                            onChange={(e) => setLawyersCount(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                        />
                    </div>

                    {/* Input Group 4 */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Valor Hora Médio (€)
                            </label>
                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{hourlyRate}€</span>
                        </div>
                        <input
                            type="range"
                            min="30"
                            max="500"
                            step="10"
                            value={hourlyRate}
                            onChange={(e) => setHourlyRate(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Right Side: Results */}
            <div className="p-8 md:p-10 lg:w-7/12 bg-gray-900 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Background FX */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[80px] -mt-20 -mr-20 pointer-events-none"></div>

                <h3 className="text-lg font-bold text-gray-200 mb-8 flex items-center gap-2 relative z-10">
                    <span className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                    O Impacto no seu Negócio
                </h3>

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    {/* Main Loss Card */}
                    <div className="md:col-span-2 bg-white/5 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-red-400 mb-2 font-medium uppercase tracking-wider text-sm">
                                <TrendingDown className="w-4 h-4" /> Prejuízo Anual Estimado
                            </div>
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                                {formatCurrency(results.yearlyMoneyLost)}
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                                Dinheiro gasto em tarefas que poderiam ser automatizadas.
                            </p>
                        </div>
                    </div>

                    {/* Secondary Metrics */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm font-medium">
                            <Clock className="w-4 h-4" /> Horas Perdidas/Ano
                        </div>
                        <div className="text-3xl font-bold text-white">
                            {results.yearlyLostHours.toLocaleString()}h
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative">
                         {results.fteWasted > 1 && (
                            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
                                ALERTA
                            </div>
                         )}
                        <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm font-medium">
                            <Users className="w-4 h-4" /> Equipa "Fantasma"
                        </div>
                        <div className="text-3xl font-bold text-white">
                            {results.fteWasted.toFixed(1)} <span className="text-lg font-normal text-gray-400">advogados</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 leading-tight">
                            Equivalente a pagar {results.fteWasted.toFixed(1)} pessoas só para fazer trabalho administrativo.
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                    <div className="flex items-start gap-3">
                         <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                         <p className="text-sm text-gray-300">
                            Este cálculo considera apenas o custo direto. O <strong>custo de oportunidade</strong> (negócios perdidos, clientes insatisfeitos, falta de estratégia) pode ser 3x maior.
                         </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;