const Footer = () => {
    return (
        <footer style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "16px", background: "#fff", padding: "2rem", fontFamily: "'Garamond', serif" }}>
            <div>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>Contacto</h4>

                <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                    <img src="src/assets/iconos/gps.png" alt="" style={{ height: 20, marginRight: 6 }} />
                    <span>Bello: Diagonal 50a #38-20, piso 5.</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                    <img src="src/assets/iconos/correo.png" alt="" style={{ height: 20, marginRight: 6 }} />
                    <span>bienestarestudiantil@cesde.edu.co</span>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="src/assets/iconos/telefono.png" alt="" style={{ height: 20, marginRight: 6 }} />
                    <span>316 354 66 17</span>
                </div>
            </div>
            <div>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>Ubicación</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4325243175094!2d-75.5454113!3d6.3379818000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f11a205b239%3A0xa3974aa926dbfac1!2sCesde%20sede%20norte!5e0!3m2!1ses!2sco!4v1746219660722!5m2!1ses!2sco"
                    style={{ width: "100%", maxWidth: 400, height: 200, border: 0 }}
                    allowFullScreen loading="lazy"
                />
            </div>
            <div>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>Redes sociales</h4>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

                    <a href="https://co.linkedin.com/company/cesde-formaci%C3%B3n-t%C3%A9cnica"><img src="src/assets/iconos/linkedin.png" alt="LinkedIn" style={{ height: 20, marginRight: 8 }} /></a>
                    <a href="https://www.facebook.com/Cesde/?locale=es_LA"><img src="src/assets/iconos/facebook.png" alt="Facebook" style={{ height: 20, marginRight: 8 }} /></a>
                    <a href="https://www.instagram.com/cesdeoficial/?hl=es"><img src="src/assets/iconos/instagram.png" alt="Instagram" style={{ height: 20, marginRight: 8 }} /></a>
                    <a href="https://www.youtube.com/c/SomosCESDE"><img src="src/assets/iconos/youtube.png" alt="YouTube" style={{ height: 20 }} /></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer