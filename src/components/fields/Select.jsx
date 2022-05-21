import { StyledErrorMessage } from 'styles/StyledForm'

const Select = ({ name, labelText, options, enabled, handleChange, handleBlur, values, errors, touched, data }) => (
  enabled &&
    <label htmlFor={name}>
      {labelText}
      <select
        name={name}
        id={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={errors[name] && touched[name] ? 'error' : ''}
      >
        <option value=''>{options.emptyValue}</option>
        {data?.[options?.name]?.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      {errors[name] && touched[name] && <StyledErrorMessage>{errors[name]}</StyledErrorMessage>}
    </label>
)
export default Select
