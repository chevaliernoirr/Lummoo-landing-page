import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Calculator from './components/Calculator';
import BenefitsSection from './components/BenefitsSection';
import ComparisonSection from './components/ComparisonSection';
import AudienceSection from './components/AudienceSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Calculator />
        <BenefitsSection />
        <ComparisonSection />
        <AudienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;