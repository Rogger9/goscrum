import { StyledButton } from './style'

const Button = ({ value = 'Value', type = 'button', isDisabled, handleClick }) => (
  <StyledButton
    type={type}
    aria-label={value}
    disabled={isDisabled}
    onClick={handleClick}
  >
    {value}
  </StyledButton>
)

export default Button
