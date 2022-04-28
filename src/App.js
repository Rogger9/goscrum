import { Route, Routes } from 'react-router-dom'
import { LOGIN } from 'routes'
import Login from 'components/views/forms/Login'

export const App = () => (
  <Routes>
    <Route path={LOGIN} element={<Login />} />
  </Routes>
)
