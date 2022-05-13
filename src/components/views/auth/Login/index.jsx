import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AnimatedPage from 'components/AnimatedPage'
import Button from 'components/Button'
import { HOME, REGISTER } from 'routes'
import { StyledAuth } from '../style'
import { StyledErrorMessage, StyledForm } from 'styles/StyledForm'
import swal from 'utils/swal'

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env

const initialValues = {
  userName: '',
  password: ''
}

const requiredMessage = '*Campo obligatorio'

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, 'La cantidad mínima de caracteres es 4')
    .matches(/^\D*$/, 'El usuario no puede contener números')
    .required(requiredMessage),
  password: Yup.string()
    .min(6, 'La cantidad mínima de caracteres es 6')
    .matches(/^(?=.*[A-Z])(?=.*\d)/, 'Debe incluir una letra mayúscula y un número')
    .required(requiredMessage)
})

const Login = () => {
  const navigate = useNavigate()

  const onSubmit = ({ userName, password }) => {
    window.fetch(`${API_ENDPOINT}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        password
      })
    })
      .then(res => res.json())
      .then(({ status_code: statusCode, result }) => {
        if (statusCode !== 200) return swal()
        window.localStorage.setItem('token', result?.token)
        navigate(HOME, { replace: true })
      })
      .catch(() => swal({ title: 'Hubo un error', text: 'Intente más tarde', icon: 'error' }))
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <AnimatedPage>
      <StyledAuth>
        <h2>Iniciar sesión</h2>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor='userName'>
            Nombre de usuario
            <input
              type='text'
              name='userName'
              id='userName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              className={errors.userName && touched.userName ? 'error' : ''}
            />
            {errors.userName && touched.userName && <StyledErrorMessage>{errors.userName}</StyledErrorMessage>}
          </label>
          <label htmlFor='password'>
            Contraseña
            <input
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={errors.password && touched.password ? 'error' : ''}
            />
            {errors.password && touched.password && <StyledErrorMessage>{errors.password}</StyledErrorMessage>}
          </label>
          <Button value='Enviar' type='submit' />
          <Link to={REGISTER}>Registrarme</Link>
        </StyledForm>
      </StyledAuth>
    </AnimatedPage>
  )
}

export default Login
