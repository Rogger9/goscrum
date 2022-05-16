import { TASKS_FAILURE, TASKS_REQUEST, TASKS_SUCCESS } from 'store/types'

const initialState = {
  isLoading: false,
  tasks: [],
  error: ''
}

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case TASKS_SUCCESS:
      return {
        isLoading: false,
        tasks: action.payload,
        action: ''
      }

    case TASKS_FAILURE:
      return {
        isLoading: false,
        tasks: [],
        error: action.payload
      }

    default:
      return state
  }
}
