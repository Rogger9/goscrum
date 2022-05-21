import Swal from 'sweetalert2'

const message = {
  default: {
    title: 'Credeciales inválidas',
    text: 'Por favor, introduzca credenciales válidas',
    icon: null
  },
  error: {
    title: 'Hubo un error',
    text: 'Intente más tarde',
    icon: 'error'
  }
}

const swal = (type = 'default') => (
  Swal.fire({
    ...message[type],
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#FF452B',
    width: '400px',
    timer: 10000,
    timerProgressBar: true
  })
)

export default swal
