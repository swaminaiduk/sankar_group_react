import axios from 'axios'
import config from '../../../../../configs/themeConfig'

export const getGroupEmployees = groupId => {
  
  return (dispatch) => {
    axios
      .get(`${config.app.ApiUrl}/group/groupEmployees/${groupId.id}`)
      .then(res => {
        dispatch({
          type: 'TASK_GROUP_EMPLOYEES',
          task_group_employees: res.data.data
        })
      })
  }
}

export const getGroups = () => {
  return dispatch => {
    return axios.get(`${config.app.ApiUrl}/group/groupOptions`).then(res => {
      dispatch({
        type: 'GET_TASK_GROUPS',
        task_groups: res.data.data
      })
    })
  }
}

// ** Get Tasks
export const getTasks = params => {
  return dispatch => {
    return axios.get(`${config.app.ApiUrl}/task`, { params }).then(res => {
      dispatch({
        type: 'GET_TASKS',
        tasks: res.data.data,
        params
      })
    })
  }
}
export const getTaskso = params => {
  return dispatch => {
    return axios.get('/apps/todo/tasks', { params }).then(res => {
      dispatch({
        type: 'GET_TASKS',
        tasks: res.data,
        params
      })
    })
  }
}

export const reOrderTasks = tasks => dispatch => dispatch({ type: 'REORDER_TASKS', tasks })

export const addTask = task => {
  return (dispatch, getState) => {
    axios
      .post(`${config.app.ApiUrl}/task/newTask`, task)
      .then(res => {
        dispatch({
          type: 'ADD_TASK',
          task: res.data
        })
        dispatch(getTasks({}))
      })
      .then(dispatch(getTasks(getState().todo.params)))
  }
}

// ** Update Tasks
export const updateTask = task => {
  return (dispatch, getState) => {
    axios
      .post(`${config.app.ApiUrl}/task`, task)
      .then(res => {
        dispatch({
          type: 'UPDATE_TASK',
          task: res.data
        })
        dispatch(getTasks({}))
      })
  }
}

// ** Delete Task
export const deleteTask = taskId => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/todo/delete-task', { taskId })
      .then(res => {
        dispatch({
          type: 'DELETE_TASK',
          task: res.data
        })
      })
      .then(() => dispatch(getTasks(getState().todo.params)))
  }
}

export const getComment = taskId  => {
  return (dispatch, getState) => {
    axios
      .get(`${config.app.ApiUrl}/task/comments/${taskId}`)
      .then(res => {
        dispatch({
          type: 'SELECTED_COMMENT',
          comment: res.data.data
        })
      })
      .then(() => dispatch(getTasks(getState().todo.params)))
  }
}
export const giveTaskComment = (comment) => {
  console.log(comment)
  return (dispatch, getState) => {
    axios
      .post(`${config.app.ApiUrl}/task/comments/`, comment)
      .then(res => {
        dispatch({
          type: 'NEW_COMMENT',
          task: res.data
        })
      })
  }
}

export const selectTask = task => dispatch =>  {
  dispatch({ type: 'SELECT_TASK', task }) 
}