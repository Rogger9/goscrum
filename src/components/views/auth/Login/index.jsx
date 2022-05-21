import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { postAuth } from 'service/auth'
import { HOME, REGISTER } from 'routes'
import AnimatedPage from 'components/AnimatedPage'
import Button from 'components/Button'
import Input from 'components/fields/Input'
import swal from 'utils/swal'
import { initialValues, validationSchema, fields } from './data'
import { StyledAuth } from '../style'
import { StyledForm } from 'styles/StyledForm'

const Login = () => {
  const navigate = useNavigate()

  const onSubmit = ({ userName, password }) => {
    postAuth('login', { userName, password })
      .then(({ status_code: statusCode, result }) => {
        if (statusCode !== 200) return swal()
        window.localStorage.setItem('token', result?.token)
        window.localStorage.setItem('userName', result?.user.userName)
        navigate(HOME, { replace: true })
      })
      .catch(() => swal('error'))
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
          {fields.inputs?.map(input =>
            <Input
              key={input.name}
              {...input}
              {...{ handleChange, handleBlur, values, errors, touched }}
            />)}
          <Button value='Enviar' type='submit' />
          <Link to={REGISTER}>Registrarme</Link>
        </StyledForm>
      </StyledAuth>
    </AnimatedPage>
  )
}

export default Login
