import { useSelector } from 'react-redux'
import { useTasks } from 'hooks/useTasks'
import { useResize } from 'hooks/useResize'
import { ListOfCards } from 'components/ListOfCards'
import ShowSkeleton from './ShowSkeleton'
import DesktopView from './DesktopView'
import Filters from './Filters'
import { StyledWrapperList } from './style'
import { StyledPage } from 'styles/StyledApp'

export const WrapperList = () => {
  const { isLoading, tasks, error } = useSelector(state => state.tasksReducer)
  const { renderList, handleChangeImportance, handleSearch, handleChangeTasksFromWho } = useTasks(tasks)
  const { isPhone } = useResize()

  if (error) return <StyledPage><h4>Error! No pudimos acceder a las tareas</h4></StyledPage>

  return (
    <StyledWrapperList>
      <h2>Mis tareas</h2>
      <Filters
        handleChangeImportance={handleChangeImportance}
        handleSearch={handleSearch}
        handleChangeTasksFromWho={handleChangeTasksFromWho}
        isDisabled={!tasks?.length}
      />
      <section>
        {isLoading
          ? <ShowSkeleton />
          : isPhone
            ? <ListOfCards data={renderList} />
            : <DesktopView tasks={renderList} />}
      </section>
    </StyledWrapperList>
  )
}
