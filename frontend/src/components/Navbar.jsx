import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">RouteCraft</div>
        <ul className="navbar-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Routes</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">My Routes</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="navbar-buttons">
        <button className="btn-outline">Log In</button>
        <button className="btn-filled">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
