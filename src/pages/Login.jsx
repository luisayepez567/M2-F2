import { useState, useEffect } from "react"
import { redirect } from "../helpers/alerts"
import { endpoints } from "../services/api"
import { saveLocalStorage } from "../helpers/local-storage"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Login = () => {
  const [getEmail, setEmail] = useState("")
  const [getContrasena, setContrasena] = useState("")
  const [getUsers, setUsers] = useState([])

  function fetchUsers() {
    fetch(endpoints.estudiantes)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => { fetchUsers() }, [])

  const findUser = () =>
    getUsers.find((item) => getEmail === item.email && getContrasena === item.contrasena)

  function signIn() {
    const user = findUser()
    if (user) {
      saveLocalStorage("estudiantes", user)
      redirect(user.nombre + " " + user.apellido + " Bienvenido al sistema...", "/dashboard", "success")
    } else {
      redirect("El correo o la contraseña son incorrectos...", "/login", "error")
    }
  }

  return (
    <>
    <Header />

    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
      boxSizing: "border-box",
      fontFamily: "'Garamond', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    }}>
      <div style={{
        background: "linear-gradient(to right, #f35c7d, #a961f1)",
        padding: "60px",
        borderRadius: "20px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        width: "100%",
        maxWidth: "500px",
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        <h1 style={{ color: "white", fontSize: "2.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Inicio de sesión
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>

          <label style={{ alignSelf: "flex-start", color: "white", fontWeight: 500, fontSize: "1.125rem" }}>
            Usuario:
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Ingrese su correo"
            style={{
              width: "100%", boxSizing: "border-box", padding: "12px",
              border: "none", borderRadius: "8px",
              background: "rgba(255,255,255,0.9)",
              fontSize: "1.125rem", color: "#333",
            }}
          />

          <label style={{ alignSelf: "flex-start", color: "white", fontWeight: 500, fontSize: "1.125rem" }}>
            Contraseña
          </label>
          <input
            onChange={(e) => setContrasena(e.target.value)}
            type="password"
            placeholder="Ingrese su contraseña"
            style={{
              width: "100%", boxSizing: "border-box", padding: "12px",
              border: "none", borderRadius: "8px",
              background: "rgba(255,255,255,0.9)",
              fontSize: "1.125rem", color: "#333",
            }}
          />

          <button
            onClick={signIn}
            type="button"
            style={{
              background: "#333", color: "white",
              padding: "0.9rem 2.2rem", border: "none",
              borderRadius: "50px", fontSize: "1.125rem",
              fontWeight: 500, cursor: "pointer",
              marginTop: "20px", width: "auto",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => e.target.style.background = "rgba(200, 35, 109, 0.05)"}
            onMouseOut={(e) => e.target.style.background = "#333"}
          >
            Iniciar Sesión
          </button>

        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login