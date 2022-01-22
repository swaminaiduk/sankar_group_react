// ** Initial State
const initialState = {
  allData: [],
  // data: [],
  total: 1,
  params: {},
  selectedUser: null
}
const brands = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_BRAND_DATA':
      return { ...state, allData: action.data }
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
export default brands
