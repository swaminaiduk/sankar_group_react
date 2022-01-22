// ** Initial State
const initialState = {
  dashboardCnt: {}
}
const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'DASHBOARD_CNT':
      return { ...state, dashboardCnt: action.DashboardCnt }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    default:
      return { ...state }
  }
}
export default dashboard
