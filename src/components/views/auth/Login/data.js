import { getValidationSchema } from 'utils/validations'

export const initialValues = {
  userName: '',
  password: ''
}

export const { validationSchema } = getValidationSchema(initialValues)

export const fields = {
  inputs: [
    {
      name: 'userName',
      type: 'text',
      labelText: 'Nombre de usuario'
    },
    {
      name: 'password',
      type: 'password',
      labelText: 'Contraseña'
    }
  ]
}
