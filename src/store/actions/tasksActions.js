import { TASKS_FAILURE, TASKS_REQUEST, TASKS_SUCCESS } from 'store/types'
import { toast } from 'react-toastify'
import swal from 'utils/swal'

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env

export const tasksRequest = () => ({
  type: TASKS_REQUEST
})

export const tasksSuccess = data => ({
  type: TASKS_SUCCESS,
  payload: data
})

export const tasksFailure = err => ({
  type: TASKS_FAILURE,
  payload: err
})

export const getTasks = (path = '') => dispatch => {
  dispatch(tasksRequest())

  window.fetch(`${API_ENDPOINT}task/${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('token')
    }
  })
    .then(res => res.json())
    .then(({ result }) => dispatch(tasksSuccess(result)))
    .catch(err => dispatch(tasksFailure(err)))
}

export const postTasks = (data, resetForm) => dispatch => {
  window.fetch(`${API_ENDPOINT}task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('token')
    },
    body: JSON.stringify({ task: data })
  })
    .then(res => res.json())
    .then(({ status_code: statusCode }) => {
      if (statusCode !== 200) return swal('error')
      resetForm()
      toast.success('Tu tarea se creó correctamente')
      dispatch(getTasks())
    })
    .catch(err => dispatch(tasksFailure(err)))
}

export const deleteTask = id => dispatch => {
  window.fetch(`${API_ENDPOINT}task/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('token')
    }
  })
    .then(res => res.json())
    .then(() => dispatch(getTasks()))
    .catch(err => dispatch(tasksFailure(err)))
}

export const editTaskStatus = data => dispatch => {
  const statusList = ['NEW', 'IN PROGRESS', 'FINISHED']

  const newStatusIndex = statusList.indexOf(data.status) > 1
    ? 0
    : statusList.indexOf(data.status) + 1

  window.fetch(`${API_ENDPOINT}task/${data._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('token')
    },
    body: JSON.stringify({
      task: {
        title: data.title,
        status: statusList[newStatusIndex],
        importance: data.importance,
        description: data.description
      }
    })
  })
    .then(res => res.json())
    .then(() => dispatch(getTasks()))
    .catch(err => dispatch(tasksFailure(err)))
}
