import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { LOGIN } from 'routes'
import AnimatedPage from 'components/AnimatedPage'
import Button from 'components/Button'
import { FormControlLabel, Switch } from '@mui/material'
import Input from 'components/fields/Input'
import Select from 'components/fields/Select'
import { initialValues, validationSchema, fields } from './data'
import { StyledAuth } from '../style'
import { StyledForm } from 'styles/StyledForm'
import { useRegister } from 'hooks/useRegister'

const Register = () => {
  const { data, onSubmit } = useRegister()

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, setFieldValue } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const handleChangeContinent = value => {
    setFieldValue('continent', value)
    if (value !== 'America') setFieldValue('region', 'Otro')
    const region = fields.selects.find(item => item.name === 'region')
    if (value === 'America') region.enabled = true
  }

  return (
    <AnimatedPage>
      <StyledAuth>
        <h2>Registro</h2>
        <StyledForm onSubmit={handleSubmit}>
          {fields?.inputs?.map(input =>
            <Input
              key={input.name}
              {...input}
              {...{ handleChange, handleBlur, values, errors, touched }}
            />)}

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

          {fields?.selects?.map(select => (
            <Select
              key={select.name}
              {...select}
              {...{ handleBlur, values, errors, touched }}
              handleChange={select.name === 'continent' ? e => handleChangeContinent(e.currentTarget.value) : handleChange}
              data={data}
            />
          ))}
          <Button value='Enviar' type='submit' />
          <Link to={LOGIN}>Ir a Iniciar sesión</Link>
        </StyledForm>
      </StyledAuth>
    </AnimatedPage>
  )
}

export default Register
