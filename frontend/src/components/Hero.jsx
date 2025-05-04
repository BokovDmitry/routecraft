import background from '../assets/hero-bg.jpg';
import './styles/Hero.css';

function Hero() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">FIND, FILTER & SHARE ROUTES</p>
        <h1 className="hero-title">PLAN YOUR NEXT TRIP</h1>
        <p className="hero-description">
          Explore ready-made travel routes or create your own.<br />
          Filter by city, days, and budget – and share your journey with the world.
        </p>
        <button className="hero-button">Start Exploring</button>
      </div>
    </div>
  );
}

export default Hero;
