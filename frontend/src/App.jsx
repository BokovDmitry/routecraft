import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import './App.css';
import PopularRoutes from './components/PopularRoutes';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PopularRoutes /> 
    </>
  );
}

export default App;
