import { Card } from 'components/Card'
import { StyledContainerList } from './style'

export const ListOfCards = ({ data, title }) => (
  <StyledContainerList>
    {title && <h3>{title}</h3>}
    {data?.length
      ? data?.map(task => <Card key={task._id} {...task} />)
      : <span>No hay tareas creadas</span>}
  </StyledContainerList>
)
