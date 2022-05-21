import { getValidationSchema } from 'utils/validations'

export const initialValues = {
  userName: '',
  password: '',
  email: '',
  teamID: '',
  role: '',
  continent: '',
  region: '',
  switch: false
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
    },
    {
      name: 'email',
      type: 'email',
      labelText: 'Email'
    }
  ],
  selects: [
    {
      name: 'role',
      labelText: 'Rol',
      options: {
        emptyValue: 'Seleccionar rol...',
        name: 'Rol'
      },
      enabled: true
    },
    {
      name: 'continent',
      labelText: 'Continente',
      options: {
        emptyValue: 'Seleccionar continente...',
        name: 'continente'
      },
      enabled: true
    },
    {
      name: 'region',
      labelText: 'Region',
      options: {
        emptyValue: 'Selectionar región...',
        name: 'region'
      },
      enabled: false
    }
  ]
}
