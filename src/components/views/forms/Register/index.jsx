import { useFormik } from 'formik'
import Button from 'components/Button'
import { StyledForms, StyledErrorMessage } from 'styles/Forms'

const initialValues = {
  email: '',
  userName: '',
  password: '',
  teamID: '9cdbd108-f924-4383-947d-8f0c651d0dad',
  role: 'Team Member',
  continent: 'America',
  region: 'Latam'
}

const Register = () => {
  const onSubmit = ({ email, userName, password, teamID, role, continent, region }) => {
    console.log(email, userName, password, teamID, role, continent, region)
  }

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <StyledForms>
      <h2>Registro</h2>
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
        <label htmlFor='userName'>
          Usuario
          <input
            type='text'
            name='userName'
            id='userName'
            placeholder='Ingrese su nombre de usuario'
            onChange={handleChange}
            value={values.userName}
          />
        </label>
        {errors.userName && <StyledErrorMessage>{errors.userName}</StyledErrorMessage>}
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
        <input type='hidden' name='teamID' value='9cdbd108-f924-4383-947d-8f0c651d0dad' />
        <label htmlFor='role'>
          Rol
          <select
            name='role'
            id='role'
            onChange={handleChange}
            value={values.role}
          >
            <option value='Team Member'>Team Member</option>
            <option value='Team Leader'>Team Leader</option>
          </select>
        </label>
        {errors.role && <StyledErrorMessage>{errors.role}</StyledErrorMessage>}
        <label htmlFor='continent'>
          Continente
          <select
            name='continent'
            id='continent'
            onChange={handleChange}
            value={values.continent}
          >
            <option value='America'>América</option>
            <option value='Europa'>Europa</option>
            <option value='Otro'>Otro</option>
          </select>
        </label>
        {errors.continent && <StyledErrorMessage>{errors.continent}</StyledErrorMessage>}
        <label htmlFor='region'>
          Región
          <select
            name='region'
            id='region'
            onChange={handleChange}
            value={values.region}
          >
            <option value='Latam'>Latam</option>
            <option value='Brasil'>Brasil</option>
            <option value='America del norte'>América del norte</option>
            <option value='Otro'>Otro</option>
          </select>
        </label>
        {errors.region && <StyledErrorMessage>{errors.region}</StyledErrorMessage>}
        <Button value='Enviar' type='submit' />
      </form>
    </StyledForms>
  )
}

export default Register
