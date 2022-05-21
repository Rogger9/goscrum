import { ListOfCards } from 'components/ListOfCards'
import { filterByStatus } from 'utils'

const DescktopView = ({ tasks }) => {
  const taskStatus = filterByStatus(tasks)

  if (!tasks?.length) return <span>No hay tareas creadas</span>

  return (
    <>
      <ListOfCards data={taskStatus.NEW} title='Nuevas' />
      <ListOfCards data={taskStatus['IN PROGRESS']} title='En proceso' />
      <ListOfCards data={taskStatus.FINISHED} title='Finalizadas' />
    </>
  )
}

export default DescktopView
