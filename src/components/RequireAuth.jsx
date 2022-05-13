import { Navigate } from 'react-router-dom'
import { LOGIN } from 'routes'

const RequireAuth = ({ children }) => {
  const auth = window.localStorage.getItem('token')

  return auth ? children : <Navigate to={LOGIN} replace />
}

export default RequireAuth
