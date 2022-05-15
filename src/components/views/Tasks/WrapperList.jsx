import { useEffect, useState } from 'react'
import { ListOfCards } from 'components/ListOfCards'
import { useResize } from 'hooks/useResize'
import swal from 'utils/swal'
import debounce from 'lodash.debounce'
import ShowSkeleton from './ShowSkeleton'
import DescktopView from './DescktopView'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { StyledForm } from 'styles/StyledForm'
import { StyledFormControl, StyledWrapperList } from './style'

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env

export const WrapperList = () => {
  const [list, setList] = useState(null)
  const [renderList, setRenderList] = useState(null)
  const [tasksFromWho, setTasksFromWho] = useState('ALL')
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { isPhone } = useResize()

  useEffect(() => {
    setIsLoading(true)
    const token = window.localStorage.getItem('token')
    const url = `${API_ENDPOINT}task${tasksFromWho === 'ME' ? '/me' : ''}`

    window.fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(({ result }) => {
        setList(result)
        setRenderList(result)
      })
      .catch(() => swal({ title: 'Hubo un error', text: 'Intente más tarde', icon: 'error' }))
      .finally(() => setIsLoading(false))
  }, [tasksFromWho])

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
