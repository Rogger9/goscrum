import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Button from 'components/Button'
import { StyledForms, StyledErrorMessage } from 'styles/Forms'

const initialValues = {
  email: '',
  password: ''
}

const validations = ({ email, password }) => {
  const errors = {}

  if (!email || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) errors.email = 'Ingrese un correo electrónico válido'

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
    <StyledForms>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            name='email'
            id='email'
            placeholder='correo@correo.com'
            onChange={handleChange}
            value={values.email}
          />
        </label>
        {errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
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
    </StyledForms>
  )
}

export default Login
