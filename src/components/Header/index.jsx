import { useNavigate } from 'react-router-dom'
import { LOGIN } from 'routes'
import { StyledHeader } from './style'
import { StyledButtonClose } from 'styles/StyledApp'
import logo from 'assets/GoScrum-logo.png'

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    navigate(LOGIN, { replace: true })
  }

  return (
    <StyledHeader>
      <img src={logo} alt='Logo' width='82' />
      <StyledButtonClose onClick={handleLogout} header>X</StyledButtonClose>
    </StyledHeader>
  )
}

export default Header
