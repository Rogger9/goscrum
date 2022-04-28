import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Button from 'components/Button'
import { StyledErrorMessage, StyledLogin } from './style'

const initialValues = {
  username: '',
  password: ''
}

const validations = ({ username, password }) => {
  const errors = {}

  if (!username) errors.username = 'Ingrese un nombre de usuario'
  if (/\d/.test(username)) errors.username = 'Ingrese un nombre de usuario válido'

  if (!password) errors.password = 'Ingrese una contraseña'
  if (!/^(?=.*[A-Z])(?=.*\d)(?=.{6,})/.test(password)) errors.password = 'Ingrese una contraseña válida. Extensión mínima de 6 caracteres, incluyendo mínimo una letra mayúscula y un número.'

  return errors
}

const Login = () => {
  const navigate = useNavigate()

  const onSubmit = () => {
    window.localStorage.setItem('logged', 'yes')
    navigate('/', { replace: true })
  }

  const { handleSubmit, handleChange, values, errors, isValid, dirty } = useFormik({
    initialValues,
    validate: validations,
    onSubmit
  })

  return (
    <StyledLogin>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Usuario
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Ingrese su nombre de usuario'
            onChange={handleChange}
            value={values.username}
          />
        </label>
        {errors.username && <StyledErrorMessage>{errors.username}</StyledErrorMessage>}
        <label htmlFor='password'>
          Contraseña
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Ingrese su contraseña'
            onChange={handleChange}
            value={values.password}
          />
        </label>
        {errors.password && <StyledErrorMessage>{errors.password}</StyledErrorMessage>}
        <Button value='Enviar' type='submit' isDisabled={!(isValid && dirty)} />
      </form>
    </StyledLogin>
  )
}

export default Login
