import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import AnimatedPage from 'components/AnimatedPage'
import Button from 'components/Button'
import { LOGIN, REGISTERED } from 'routes'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import swal from 'utils/swal'
import { StyledAuth } from '../style'
import { StyledErrorMessage, StyledForm } from 'styles/StyledForm'
import { FormControlLabel, Switch } from '@mui/material'

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env

const initialValues = {
  userName: '',
  password: '',
  email: '',
  teamID: '',
  role: '',
  continent: '',
  region: '',
  switch: false
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
    .required(requiredMessage),
  email: Yup.string()
    .email('Debe ser un email válido')
    .required(requiredMessage),
  role: Yup.string().required(requiredMessage),
  continent: Yup.string().required(requiredMessage),
  region: Yup.string().required(requiredMessage)
})

const Register = () => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    window.fetch(`${API_ENDPOINT}auth/data`)
      .then(res => res.json())
      .then(({ result }) => setData(result))
      .catch(err => console.error(err))
  }, [])

  const onSubmit = ({ userName, password, email, role, continent, region }) => {
    const teamID = values.teamID || uuidv4()

    window.fetch(`${API_ENDPOINT}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          userName,
          password,
          email,
          teamID,
          role,
          continent,
          region
        }
      })
    })
      .then(res => res.json())
      .then(({ result }) => navigate(REGISTERED + result?.user.teamID), { replace: true })
      .catch(() => swal({ title: 'Hubo un error', text: 'Intente más tarde', icon: 'error' }))
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, setFieldValue } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const handleChangeContinent = value => {
    setFieldValue('continent', value)
    if (value !== 'America') setFieldValue('region', 'Otro')
  }

  return (
    <AnimatedPage>
      <StyledAuth>
        <h2>Registro</h2>
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
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={errors.email && touched.email ? 'error' : ''}
            />
            {errors.email && touched.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
          </label>
          <FormControlLabel
            control={
              <Switch
                name='switch'
                onChange={() => setFieldValue('switch', !values.switch)}
                value={values.switch}
                color='warning'
              />
            }
            label='Pertenecés a un equipo ya creado'
          />
          {values.switch && (
            <label htmlFor='teamID'>
              Por favor, introduce el identificador de equipo
              <input
                type='text'
                name='teamID'
                id='teamID'
                onChange={handleChange}
                value={values.teamID}
              />
            </label>
          )}
          <label htmlFor='role'>
            Rol
            <select
              name='role'
              id='role'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
              className={errors.role && touched.role ? 'error' : ''}
            >
              <option value=''>Selectionar rol...</option>
              {data?.Rol?.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            {errors.role && touched.role && <StyledErrorMessage>{errors.role}</StyledErrorMessage>}
          </label>
          <label htmlFor='continent'>
            Continente
            <select
              name='continent'
              id='continent'
              onChange={e => handleChangeContinent(e.currentTarget.value)}
              onBlur={handleBlur}
              value={values.continent}
              className={errors.continent && touched.continent ? 'error' : ''}
            >
              <option value=''>Selectionar continente...</option>
              {data?.continente?.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            {errors.continent && touched.continent && <StyledErrorMessage>{errors.continent}</StyledErrorMessage>}
          </label>
          {values.continent === 'America' && (
            <label htmlFor='region'>
              Región
              <select
                name='region'
                id='region'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.region}
                className={errors.region && touched.region ? 'error' : ''}
              >
                <option value=''>Selectionar región...</option>
                {data?.region?.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              {errors.region && touched.region && <StyledErrorMessage>{errors.region}</StyledErrorMessage>}
            </label>
          )}
          <Button value='Enviar' type='submit' />
          <Link to={LOGIN}>Ir a Iniciar sesión</Link>
        </StyledForm>
      </StyledAuth>
    </AnimatedPage>
  )
}

export default Register
