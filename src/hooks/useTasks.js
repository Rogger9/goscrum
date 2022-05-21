import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTasks } from 'store/actions/tasksActions'
import debounce from 'lodash.debounce'

export const useTasks = tasks => {
  // const [list, setList] = useState(null)
  const [renderList, setRenderList] = useState(null)
  const [tasksFromWho, setTasksFromWho] = useState('ALL')
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks(tasksFromWho === 'ME' ? 'me' : ''))
  }, [tasksFromWho])

  useEffect(() => {
    // if (tasks?.length) {
    // setList(tasks)
    setRenderList(tasks)
    // }
  }, [tasks])

  useEffect(() => {
    search
      ? setRenderList(tasks?.filter(task => task.title.startsWith(search)))
      : setRenderList(tasks)
  }, [search])

  const handleChangeImportance = e => {
    if (e.currentTarget.value === 'ALL') return setRenderList(tasks)
    setRenderList(tasks?.filter(task => task.importance === e.currentTarget.value))
  }

  const handleSearch = debounce(
    e => setSearch(e?.target?.value),
    1000
  )

  const handleChangeTasksFromWho = e => setTasksFromWho(e.currentTarget.value)

  return { renderList, handleChangeImportance, handleSearch, handleChangeTasksFromWho }
}
