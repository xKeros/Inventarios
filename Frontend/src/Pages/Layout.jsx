import "../Styles/layout.css"

const Layout = () => {
  return (
    <div>
      <div className="banner">
        <div className="slider">
          <img src="https://sigelmanassociates.com/wp-content/uploads/2022/04/California-Commercial-Truck-Axle-Weight-Limits-2022.jpg" alt="Banner 1" id="sliderImg"/>
        </div>
        <div className="overlay">
          <div className="navbar">
            <div className="logo">
              <img src="https://imgur.com/JtfM5BG.png" alt="Logo" />
            </div>
          </div>
          <div className="content">
            <h1>Inventarios Lunaca S.A</h1>
            <h3>Sistema de control de inventarios para Lunaca S.A</h3>
          </div>
          <div>
            <a href="/crear"><button type="button">Escanear Productos</button></a>
            <a href="/lista"><button type="button">Ver inventarios</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
