import React from 'react'
import HeroSection from '../src/components/HeroSection'
import Lenis from 'lenis'
import TopProduct from './components/TopProduct';

function App() {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 1.4,
  });

  return (
    <>
      <HeroSection />
      <TopProduct />
    </>
  )
}

export default App