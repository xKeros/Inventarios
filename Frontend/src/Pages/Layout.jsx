import "../Styles/layout.css";

const HeroSection = () => {
  return (
    <section
      className="section hero"
      aria-label="home"
      id="home"
      style={{ backgroundImage: "url('https://imgur.com/ih6LI95.jpg')" }}
    >
      <div className="container">
        <div className="hero-content">
          <h3 className="h1 hero-title">
            <span className="span">Inventarios</span> LUNACA S.A.
          </h3>

          <p className="hero-text">
            Sistema de control de inventarios Lunaca S.A.
          </p>

          <div className="btn-container">
            <a href="#" className="btn-outline">
              Ver Inventario
            </a>
            <a href="#" className="btn-outline">
              Escanear Productos
            </a>
          </div>

          <img
            src="https://imgur.com/244TlLp.png"
            width="116"
            height="116"
            loading="lazy"
            className="hero-shape shape-1"
          />

          <img
            src="https://imgur.com/244TlLp.png"
            width="116"
            height="116"
            loading="lazy"
            className="hero-shape shape-2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
