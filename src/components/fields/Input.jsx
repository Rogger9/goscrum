import { StyledErrorMessage } from 'styles/StyledForm'

const Input = ({ name, type, labelText, placeholder, handleChange, handleBlur, values, errors, touched }) => (
  <label htmlFor={name}>
    {labelText}
    <input
      type={type}
      name={name}
      id={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
      className={errors[name] && touched[name] ? 'error' : ''}
      placeholder={placeholder}
    />
    {errors[name] && touched[name] && <StyledErrorMessage>{errors[name]}</StyledErrorMessage>}
  </label>
)

export default Input
