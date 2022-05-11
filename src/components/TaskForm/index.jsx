import { useFormik } from 'formik'
import Button from 'components/Button'
import * as Yup from 'yup'
import { StyledErrorMessage, StyledForm } from './style'

const initialValues = {
  title: '',
  status: '',
  priority: '',
  description: ''
}

const requiredMessage = '* Campo obligatorio'

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(6, 'La cantidad mínima de caracteres es 6')
    .required(requiredMessage),
  status: Yup.string()
    .required(requiredMessage),
  priority: Yup.string()
    .required(requiredMessage)
})

export const TaskForm = () => {
  const onSubmit = () => {
    window.alert()
  }

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({ initialValues, validationSchema, onSubmit })
  console.log(errors)

  return (
    <section>
      <h2>Crear tarea</h2>
      <p>Crea tus tareas</p>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Título'
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.title && touched.title ? 'error' : ''}
            />
            {errors.title && touched.title && <StyledErrorMessage>{errors.title}</StyledErrorMessage>}
          </label>
          <label htmlFor='status'>
            <select
              name='status'
              id='status'
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.status && touched.status ? 'error' : ''}
            >
              <option value=''>Seleccionar un estado</option>
              <option value='new'>Nueva</option>
              <option value='inProcess'>En proceso</option>
              <option value='finished'>Finalizada</option>
            </select>
            {errors.status && touched.status && <StyledErrorMessage>{errors.status}</StyledErrorMessage>}
          </label>
          <label htmlFor='priority'>
            <select
              name='priority'
              id='priority'
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.priority && touched.priority ? 'error' : ''}
            >
              <option value=''>Seleccionar una proridad</option>
              <option value='low'>Baja</option>
              <option value='medium'>Media</option>
              <option value='high'>Alta</option>
            </select>
            {errors.priority && touched.priority && <StyledErrorMessage>{errors.priority}</StyledErrorMessage>}
          </label>
        </div>
        <div>
          <label htmlFor='description'>
            <textarea name='description' id='description' onChange={handleChange} placeholder='Descripción' />
          </label>
        </div>
        <Button value='Crear' type='submit' />
      </StyledForm>
    </section>
  )
}
