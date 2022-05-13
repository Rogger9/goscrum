import { useParams } from 'react-router-dom'
import AnimatedPage from 'components/AnimatedPage'
import { StyledPage } from 'styles/StyledApp'

const Registered = () => {
  const { teamID } = useParams()

  return (
    <AnimatedPage>
      <StyledPage>
        <h1>El team ID de tu equipo es: {teamID}</h1>
      </StyledPage>
    </AnimatedPage>
  )
}

export default Registered
