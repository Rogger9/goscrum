import { Card } from 'components/Card'
import { StyledContainerList } from './style'

export const ListOfCards = ({ data, title }) => (
  <StyledContainerList>
    {title && <h3>{title}</h3>}
    {data?.map(task => <Card key={task.id} {...task} />)}
  </StyledContainerList>
)
