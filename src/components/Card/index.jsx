import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTaskStatus } from 'store/actions/tasksActions'
import { limitString } from 'utils'
import { StyledButtonClose } from 'styles/StyledApp'
import { StyledButtonCard, StyledCard } from './style'

export const Card = ({ _id, title, createdAt, user: { userName }, status, importance, description }) => {
  const [showMore, setShowMore] = useState(false)
  const dispatch = useDispatch()
  const { string, addButton } = limitString(description)
  const data = { _id, title, status, importance, description }

  const datetime = new Date(createdAt).toLocaleString('es-AR') + ' hs.'
  const descriptionToShow = showMore ? description : string
  const valueButton = showMore ? 'Ver menos' : 'Ver más'

  const handleDelete = id => dispatch(deleteTask(id))
  const handleEditTaskStatus = data => dispatch(editTaskStatus(data))

  return (
    <StyledCard>
      <StyledButtonClose onClick={() => handleDelete(_id)}>X</StyledButtonClose>
      <h4>{title}</h4>
      <h6>{datetime}</h6>
      <h5>{userName}</h5>
      <section>
        <StyledButtonCard color={status} onClick={() => handleEditTaskStatus(data)}>{status.toLowerCase()}</StyledButtonCard>
        <StyledButtonCard color={importance}>{importance.toLowerCase()}</StyledButtonCard>
      </section>
      <p>{descriptionToShow}</p>
      {addButton && <StyledButtonCard pointer shadow onClick={() => setShowMore(state => !state)}>{valueButton}</StyledButtonCard>}
    </StyledCard>
  )
}
