import { useState } from 'react'
import { limitString } from 'utils'
import { StyledButtonClose } from 'styles/StyledApp'
import { StyledButtonCard, StyledCard } from './style'

export const Card = ({ title, createdAt, user: { userName }, status, importance, description }) => {
  const [showMore, setShowMore] = useState(false)
  const { string, addButton } = limitString(description)

  const datetime = new Date(createdAt).toLocaleString('es-AR') + ' hs.'
  const descriptionToShow = showMore ? description : string
  const valueButton = showMore ? 'Ver menos' : 'Ver más'

  return (
    <StyledCard>
      <StyledButtonClose>X</StyledButtonClose>
      <h4>{title}</h4>
      <h6>{datetime}</h6>
      <h5>{userName}</h5>
      <section>
        <StyledButtonCard color={status}>{status.toLowerCase()}</StyledButtonCard>
        <StyledButtonCard color={importance}>{importance.toLowerCase()}</StyledButtonCard>
      </section>
      <p>{descriptionToShow}</p>
      {addButton && <StyledButtonCard shadow onClick={() => setShowMore(state => !state)}>{valueButton}</StyledButtonCard>}
    </StyledCard>
  )
}
