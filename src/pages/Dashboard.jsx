import Card from "../components/Card"
import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

const Dashboard = () => {
  const user = getLocalStorage("estudiantes")
  const navigate = useNavigate()

  function logout() {
    removeLocalStorage("estudiantes")
    navigate("/")
  }

  return (
    <>
      <Header />
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}>
        <Card
          nombre={user.nombre}
          apellido={user.apellido}
          email={user.email}
          telefono={user.telefono}
          direccion={user.direccion}
          rol={user.rol}
          onLogout={logout}
        />
      </div>
    </>
  )
}

export default Dashboard
