// Services.js

const Services = () => {
  return (
    <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#007BFF' }}>Our Services</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        marginTop: '2rem',
      }}>
        <ServiceCard title="Regular Cleaning" description="Perfect for homes that need occasional cleaning." />
        <ServiceCard title="Deep Cleaning" description="For homes or offices needing a more thorough clean." />
        <ServiceCard title="Move-In/Move-Out Cleaning" description="We help with cleaning after a move." />
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} >
      <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{title}</h3>
      <p style={{ color: '#555' }}>{description}</p>
    </div>
  );
};

export default Services;
