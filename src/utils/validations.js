import * as Yup from 'yup'

const REQUIRED_MESSAGE = '*Campo obligatorio'

const validations = {
  userName: Yup.string()
    .min(4, 'La cantidad mínima de caracteres es 4')
    .matches(/^\D*$/, 'El usuario no puede contener números')
    .required(REQUIRED_MESSAGE),
  password: Yup.string()
    .min(6, 'La cantidad mínima de caracteres es 6')
    .matches(/^(?=.*[A-Z])(?=.*\d)/, 'Debe incluir una letra mayúscula y un número')
    .required(REQUIRED_MESSAGE),
  email: Yup.string()
    .email('Debe ser un email válido')
    .required(REQUIRED_MESSAGE),
  // role: Yup.string()
  //   .required(REQUIRED_MESSAGE),
  // continent: Yup.string()
  //   .required(REQUIRED_MESSAGE),
  // region: Yup.string()
  //   .required(REQUIRED_MESSAGE),
  title: Yup.string()
    .min(6, 'La cantidad mínima de caracteres es 6')
    .required(REQUIRED_MESSAGE),
  // status: Yup.string()
  //   .required(REQUIRED_MESSAGE),
  // importance: Yup.string()
  //   .required(REQUIRED_MESSAGE),
  // description: Yup.string()
  //   .required(REQUIRED_MESSAGE),
  default: Yup.string()
    .required(REQUIRED_MESSAGE)
}

export const getValidationSchema = values => {
  const fieldList = ['role', 'continent', 'region', 'status', 'importance', 'description']

  const formFields = Object.keys(values).reduce((acc, key) => {
    if (fieldList.includes(key)) acc[key] = validations.default
    if (validations[key]) acc[key] = validations[key]
    return acc
  }, {})

  const validationSchema = Yup.object().shape(formFields)
  return { validationSchema }
}
