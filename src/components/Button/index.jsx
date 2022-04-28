import { StyledButton } from './style'

const Button = ({ value = 'Value', type = 'button', isDisabled, handleClick, color }) => (
  <StyledButton
    type={type}
    aria-label={value}
    disabled={isDisabled}
    onClick={handleClick}
    color={color}
  >
    {value}
  </StyledButton>
)

export default Button
