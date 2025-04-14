// Navbar.js
import { Link } from 'react-router-dom';  // Add this import

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#fff', /* Clean white */
      color: '#333', /* Dark text */
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', /* Soft shadow */
      zIndex: 1000,
    }}>
      <h2 style={{ fontWeight: '500', fontSize: '1.8rem' }}>CleanPro</h2>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/quote" style={linkStyle}>Get a Quote</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: '#333',
  fontSize: '1.1rem',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

export default Navbar;
