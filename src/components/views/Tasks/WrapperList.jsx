import { ListOfCards } from 'components/ListOfCards'
import { useResize } from 'hooks/useResize'
import { divideTasksByType } from 'utils'
import { cardsData } from './data'
import { StyledWrapperList } from './style'

export const WrapperList = () => {
  const { isPhone } = useResize()

  const taskTypes = !isPhone && divideTasksByType(cardsData)

  return (
    <StyledWrapperList>
      <h2>Mis tareas</h2>
      {isPhone
        ? <ListOfCards data={cardsData} />
        : (
          <>
            <ListOfCards data={taskTypes.new} title='Nuevas' />
            <ListOfCards data={taskTypes.inProcess} title='En proceso' />
            <ListOfCards data={taskTypes.finished} title='Finalizadas' />
          </>
          )}
    </StyledWrapperList>
  )
}
