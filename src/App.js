import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LOGIN, REGISTER } from 'routes'
import { AnimatePresence } from 'framer-motion'
import Loader from 'components/Loader'

const Login = lazy(() => import('components/views/forms/Login'))
const Register = lazy(() => import('components/views/forms/Register'))

export const App = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}
