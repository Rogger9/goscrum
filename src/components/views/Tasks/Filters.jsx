import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { StyledForm } from 'styles/StyledForm'
import { StyledFormControl } from './style'

const Filters = ({ handleChangeTasksFromWho, handleSearch, handleChangeImportance, isDisabled }) => (
  <StyledForm as='section'>
    <StyledFormControl disabled={isDisabled}>
      <RadioGroup
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        onChange={handleChangeTasksFromWho}
        defaultValue='ALL'
      >
        <FormControlLabel
          value='ALL'
          control={<Radio />}
          label='Todas'
        />
        <FormControlLabel
          value='ME'
          control={<Radio />}
          label='Mis tareas'
        />
      </RadioGroup>
    </StyledFormControl>
    <label htmlFor='search'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Buscar por título...'
        onChange={handleSearch}
        disabled={isDisabled}
      />
    </label>
    <label htmlFor='importance'>
      <select name='importance' id='importance' onChange={handleChangeImportance} disabled={isDisabled}>
        <option value=''>Seleccionar una prioridad</option>
        <option value='ALL'>Todas</option>
        <option value='LOW'>Baja</option>
        <option value='MEDIUM'>Media</option>
        <option value='HIGH'>Alta</option>
      </select>
    </label>
  </StyledForm>
)

export default Filters
