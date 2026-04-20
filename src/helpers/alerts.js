import Swal from 'sweetalert2'

export function redirect(mensaje, ruta, tipo) {
    Swal.fire({
        title: mensaje,
        icon: tipo,
        timer: 2000,
        showConfirmButton: false,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff",
        backdrop: `rgba(0,0,123,0.4) left top no-repeat`
    }).then(() => {
        window.location.href = ruta
    })
}