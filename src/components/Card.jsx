const Card = ({ imagen, titulo, descripcion, nombre, apellido, telefono, email, direccion, rol, onLogout, onClick }) => {

  const iniciales = nombre
    ? (nombre[0] + (apellido ? apellido[0] : "")).toUpperCase()
    : null

  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "30px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {iniciales ? (
        <>
          <div style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(to right, #f35c7d, #a961f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px auto",
          }}>
            <span style={{ color: "white", fontSize: "1.5rem", fontWeight: 700 }}>
              {iniciales}
            </span>
          </div>

          <h3 style={{ color: "#333", fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px" }}>
            {nombre} {apellido}
          </h3>

          <p style={{ color: "#e91e8c", fontSize: "0.85rem", marginBottom: "16px" }}>
            {rol || "Estudiante"}
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #eee", marginBottom: "16px" }} />

          <div style={{ textAlign: "left", fontSize: "0.9rem", color: "#555", display: "flex", flexDirection: "column", gap: "10px" }}>
            {email && (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>✉️</span>
                <span>{email}</span>
              </div>
            )}
            {telefono && (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>📞</span>
                <span>{telefono}</span>
              </div>
            )}
            {direccion && (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>📍</span>
                <span>{direccion}</span>
              </div>
            )}
          </div>

          <button
            onClick={onLogout}
            style={{
              background: "linear-gradient(to right, #f35c7d, #a961f1)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              padding: "0.6rem 1.5rem",
              fontSize: "0.9rem",
              cursor: "pointer",
              width: "100%",
              marginTop: "20px",
            }}
            onMouseOver={(e) => e.target.style.opacity = "0.85"}
            onMouseOut={(e) => e.target.style.opacity = "1"}
          >
            Cerrar Sesión
          </button>
        </>

      ) : (
        <>
          <img src={imagen} alt={titulo} style={{
            height: 120,
            display: "block",
            margin: "0 auto 16px auto"
          }} />
          <h3 style={{ color: "#e91e8c", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>
            {titulo}
          </h3>
          <p style={{ color: "#333", fontSize: "0.9rem" }}>
            {descripcion}
          </p>
        </>
      )}
    </div>
  )
}

export default Card