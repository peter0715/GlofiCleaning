// Home.js

const Home = () => {
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', padding: '3rem 2rem' }}>
      <h1 style={{ color: '#007BFF', fontSize: '3rem', fontWeight: '600' }}>Welcome to CleanPro</h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#555',
        maxWidth: '800px',
        margin: '2rem auto',
        lineHeight: '1.6',
      }}>
        Your trusted cleaning service, committed to keeping your spaces spotless and fresh! We provide professional home, office, and move-in/move-out cleaning.
      </p>
      <button style={buttonStyle}>Explore Our Services</button>
    </div>
  );
};

const buttonStyle = {
  padding: '0.8rem 2rem',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '30px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Home;
