// pages/Quote.js
const Quote = () => {
  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1 style={{ color: "#007BFF" }}>Get a Quote</h1>
      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label>How many rooms?</label>
          <input type="number" placeholder="Enter number of rooms" style={{ padding: "0.5rem", width: "200px" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>How dirty is your place?</label>
          <input type="range" min="1" max="5" defaultValue="3" style={{ width: "200px" }} />
        </div>
        <button type="submit" style={{ padding: "0.7rem 1.5rem", backgroundColor: "#007BFF", color: "#fff", border: "none", cursor: "pointer", borderRadius: "5px" }}>
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default Quote;
