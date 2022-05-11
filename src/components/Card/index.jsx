import { limitString } from 'utils'
import { StyledButtonClose } from 'styles/StyledApp'
import { StyledButtonCard, StyledCard } from './style'

export const Card = ({ title, datetime, creator, type, priority, description }) => {
  const { string, addButton } = limitString(description)

  return (
    <StyledCard>
      <StyledButtonClose aria-label='Cerrar'>X</StyledButtonClose>
      <h4>{title}</h4>
      <h6>{datetime}</h6>
      <h5>{creator}</h5>
      <section>
        <StyledButtonCard color={type} aria-label={type}>{type}</StyledButtonCard>
        <StyledButtonCard color={priority} aria-label={priority}>{priority}</StyledButtonCard>
      </section>
      <p>{string}</p>
      {addButton && <StyledButtonCard shadow aria-label='Ver más'>Ver más</StyledButtonCard>}
    </StyledCard>
  )
}
