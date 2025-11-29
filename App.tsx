import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import Calculator from './components/Calculator.tsx';
import BenefitsSection from './components/BenefitsSection.tsx';
import ComparisonSection from './components/ComparisonSection.tsx';
import AudienceSection from './components/AudienceSection.tsx';
import Footer from './components/Footer.tsx';

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