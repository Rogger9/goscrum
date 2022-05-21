import { Link, useParams } from 'react-router-dom'
import AnimatedPage from 'components/AnimatedPage'
import { StyledPage } from 'styles/StyledApp'
import { LOGIN } from 'routes'

const Registered = () => {
  const { teamID } = useParams()

  return (
    <AnimatedPage>
      <StyledPage>
        <h1>El team ID de tu equipo es: {teamID}</h1>
        <Link to={LOGIN}>Ir a Iniciar sesión</Link>
      </StyledPage>
    </AnimatedPage>
  )
}

export default Registered
