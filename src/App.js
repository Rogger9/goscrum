import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LOGIN, REGISTER } from 'routes'
import { AnimatePresence } from 'framer-motion'
import Login from 'components/views/forms/Login'
import Register from 'components/views/forms/Register'
import Loader from 'components/Loader'

const Error404 = lazy(() => import('components/views/Erro404'))

export const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <Error404 />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
