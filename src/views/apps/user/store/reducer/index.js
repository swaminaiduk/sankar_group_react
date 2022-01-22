// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  companyList: [],
  brandOptions: []
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_STAFF_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_COMPANY_LIST':
      return { ...state, companyList: action.companyList }
    case 'BRAND_OPTIONS':
      return { ...state, brandOptions: action.brandOptions }
    default:
      return { ...state }
  }
}
export default users
