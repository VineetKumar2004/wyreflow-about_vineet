// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlanceTabs from './components/GlanceTabs';
import Vision from './components/Vision';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <GlanceTabs />
      <Vision />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;