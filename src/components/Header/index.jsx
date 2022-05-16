import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LOGIN } from 'routes'
import { StyledHeader, StyledWrapperRight } from './style'
import { StyledButtonClose } from 'styles/StyledApp'
import logo from 'assets/GoScrum-logo.png'

const Header = () => {
  const navigate = useNavigate()
  const userName = window.localStorage.getItem('userName')
  const { tasks } = useSelector(state => state.tasksReducer)

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userName')
    navigate(LOGIN, { replace: true })
  }

  return (
    <StyledHeader>
      <img src={logo} alt='Logo' width='82' />
      <StyledWrapperRight>
        <span>Tareas creadas: {tasks?.length}</span>
        <span>{userName}</span>
        <StyledButtonClose onClick={handleLogout} header>X</StyledButtonClose>
      </StyledWrapperRight>
    </StyledHeader>
  )
}

export default Header
