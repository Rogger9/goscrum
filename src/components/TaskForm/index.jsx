import { useDispatch } from 'react-redux'
import { postTasks } from 'store/actions/tasksActions'
import { useFormik } from 'formik'
import Button from 'components/Button'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import swal from 'utils/swal'
import { StyledFormTask } from './style'
import { StyledErrorMessage } from 'styles/StyledForm'
import 'react-toastify/dist/ReactToastify.min.css'

const initialValues = {
  title: '',
  status: '',
  importance: '',
  description: ''
}

const requiredMessage = '*Campo obligatorio'

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(6, 'La cantidad mínima de caracteres es 6')
    .required(requiredMessage),
  status: Yup.string()
    .required(requiredMessage),
  importance: Yup.string()
    .required(requiredMessage),
  description: Yup.string()
    .required(requiredMessage)
})

export const TaskForm = () => {
  const dispatch = useDispatch()

  const onSubmit = () => dispatch(postTasks(values, resetForm, toast, swal))

  const { handleSubmit, handleChange, handleBlur, errors, touched, values, resetForm } = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <section>
      <h2>Crear tarea</h2>
      <p>Crea tus tareas</p>
      <StyledFormTask onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Título'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
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
              value={values.status}
              className={errors.status && touched.status ? 'error' : ''}
            >
              <option value=''>Seleccionar un estado</option>
              <option value='NEW'>Nueva</option>
              <option value='IN PROGRESS'>En proceso</option>
              <option value='FINISHED'>Finalizada</option>
            </select>
            {errors.status && touched.status && <StyledErrorMessage>{errors.status}</StyledErrorMessage>}
          </label>
          <label htmlFor='importance'>
            <select
              name='importance'
              id='importance'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.importance}
              className={errors.importance && touched.importance ? 'error' : ''}
            >
              <option value=''>Seleccionar una prioridad</option>
              <option value='LOW'>Baja</option>
              <option value='MEDIUM'>Media</option>
              <option value='HIGH'>Alta</option>
            </select>
            {errors.importance && touched.importance && <StyledErrorMessage>{errors.importance}</StyledErrorMessage>}
          </label>
        </div>
        <div>
          <label htmlFor='description'>
            <textarea
              name='description'
              id='description'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder='Descripción'
              className={errors.description && touched.description ? 'error' : ''}
            />
            {errors.description && touched.description && <StyledErrorMessage>{errors.description}</StyledErrorMessage>}
          </label>
        </div>
        <Button value='Crear' type='submit' />
      </StyledFormTask>
      <ToastContainer />
    </section>
  )
}
