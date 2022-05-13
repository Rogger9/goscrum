import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HOME, LOGIN, REGISTER, REGISTERED, TEAM_ID } from 'routes'
import { AnimatePresence } from 'framer-motion'
import RequireAuth from 'components/RequireAuth'
import Tasks from 'components/views/Tasks'
import Login from 'components/views/auth/Login'
import Register from 'components/views/auth/Register'
import Loader from 'components/Loader'
import Registered from 'components/views/Registered'

const Error404 = lazy(() => import('components/views/Erro404'))

export const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={REGISTERED + TEAM_ID} element={<Registered />} />
        <Route
          path={HOME}
          element={
            <RequireAuth>
              <Tasks />
            </RequireAuth>
          }
        />
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
