// **  Initial State
const initialState = {
  brandData: {}
}

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_BRAND_DATA':
      return { ...state, userData: action.data }
    default:
      return state
  }
}

export default brandReducer
