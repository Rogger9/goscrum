import { Route, Routes } from 'react-router-dom'
import { LOGIN, REGISTER } from 'routes'
import Login from 'components/views/forms/Login'
import Register from 'components/views/forms/Register'

export const App = () => (
  <Routes>
    <Route path={LOGIN} element={<Login />} />
    <Route path={REGISTER} element={<Register />} />
  </Routes>
)
