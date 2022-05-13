import Swal from 'sweetalert2'

const swal = ({
  title = 'Credeciales inválidas',
  text = 'Por favor, introduzca credenciales válidas',
  icon = null
} = {}) => (
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#FF452B',
    width: '400px',
    timer: 10000,
    timerProgressBar: true
  })
)

export default swal
