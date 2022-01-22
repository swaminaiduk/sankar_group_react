// ** Initial State
const initialState = {
  tasks: [],
  task_groups: [],
  selectedTask: {},
  selectedComment: {},
  task_group_employees: [],
  params: {    
    filter: '',
    q: '',
    sort: '',
    tag: ''
  }
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASK_GROUPS': //s
      return { ...state, task_groups: action.task_groups }
    case 'TASK_GROUP_EMPLOYEES':
      return { ...state, task_group_employees: action.task_group_employees }
    case 'GET_TASKS':
      return { ...state, tasks: action.tasks, params: action.params }
    case 'UPDATE_TASKS':
      return { ...state }
    case 'REORDER_TASKS':
      return { ...state, tasks: action.tasks }
    case 'SELECT_TASK':
      return { ...state, selectedTask: action.task }
    case 'SELECTED_COMMENT':
      return { ...state, selectedComment: action.comment }
    default:
      return state
  }
}
export default TodoReducer
