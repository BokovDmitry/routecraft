import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="content">
        <h1>GG</h1>
        <p>content</p>
      </div>
    </>
  );
}

export default App;
