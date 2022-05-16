import { useEffect, useState } from 'react'
import { ListOfCards } from 'components/ListOfCards'
import { useResize } from 'hooks/useResize'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from 'store/actions/tasksActions'
import debounce from 'lodash.debounce'
import ShowSkeleton from './ShowSkeleton'
import DescktopView from './DescktopView'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { StyledForm } from 'styles/StyledForm'
import { StyledFormControl, StyledWrapperList } from './style'
import { StyledPage } from 'styles/StyledApp'

export const WrapperList = () => {
  const [list, setList] = useState(null)
  const [renderList, setRenderList] = useState(null)
  const [tasksFromWho, setTasksFromWho] = useState('ALL')
  const [search, setSearch] = useState('')
  const { isPhone } = useResize()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks(tasksFromWho === 'ME' ? 'me' : ''))
  }, [tasksFromWho])

  const { isLoading, tasks, error } = useSelector(state => state.tasksReducer)

  useEffect(() => {
    if (tasks?.length) {
      setList(tasks)
      setRenderList(tasks)
    }
  }, [tasks])

  useEffect(() => {
    search
      ? setRenderList(list?.filter(task => task.title.startsWith(search)))
      : setRenderList(list)
  }, [search])

  const handleChangeImportance = e => {
    if (e.currentTarget.value === 'ALL') return setRenderList(list)
    setRenderList(list?.filter(task => task.importance === e.currentTarget.value))
  }

  const handleSearch = debounce(
    e => setSearch(e?.target?.value),
    1000
  )

  if (error) return <StyledPage><h4>Error! No pudimos acceder a las tareas</h4></StyledPage>

  return (
    <StyledWrapperList>
      <h2>Mis tareas</h2>
      <StyledForm as='section'>
        <StyledFormControl>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            onChange={e => setTasksFromWho(e.currentTarget.value)}
          >
            <FormControlLabel
              value='ALL'
              control={<Radio />}
              label='Todas'
            />
            <FormControlLabel
              value='ME'
              control={<Radio />}
              label='Mis tareas'
            />
          </RadioGroup>
        </StyledFormControl>
        <label htmlFor='search'>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Buscar por título...'
            onChange={handleSearch}
          />
        </label>
        <label htmlFor='importance'>
          <select name='importance' id='importance' onChange={handleChangeImportance}>
            <option value=''>Seleccionar una prioridad</option>
            <option value='ALL'>Todas</option>
            <option value='LOW'>Baja</option>
            <option value='MEDIUM'>Media</option>
            <option value='HIGH'>Alta</option>
          </select>
        </label>
      </StyledForm>
      <section>
        {isLoading
          ? <ShowSkeleton />
          : isPhone
            ? <ListOfCards data={renderList} />
            : <DescktopView tasks={renderList} />}
      </section>
    </StyledWrapperList>
  )
}
