import { Link } from 'react-router-dom'
import { HOME } from 'routes'
import AnimatedPage from 'components/AnimatedPage'
import { StyledError404 } from './style'
import img404 from 'assets/error404.svg'

const Error404 = () => (
  <AnimatedPage>
    <StyledError404>
      <img src={img404} alt='Error404' width='90' />
      <h1>Página no encontrada!</h1>
      <span>Volver al <Link to={HOME}>INICIO</Link></span>
    </StyledError404>
  </AnimatedPage>
)

export default Error404
