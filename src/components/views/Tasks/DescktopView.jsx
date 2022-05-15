import { ListOfCards } from 'components/ListOfCards'
import { divideTasksByStatus } from 'utils'

const DescktopView = ({ tasks }) => {
  const taskStatus = divideTasksByStatus(tasks)

  return (
    <>
      {tasks?.length
        ? (
          <>
            <ListOfCards data={taskStatus?.NEW} title='Nuevas' />
            <ListOfCards data={taskStatus?.['IN PROGRESS']} title='En proceso' />
            <ListOfCards data={taskStatus?.FINISHED} title='Finalizadas' />
          </>)
        : <span>No hay tareas creadas</span>}
    </>
  )
}

export default DescktopView
