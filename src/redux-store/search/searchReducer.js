import { SEARCH_CHANGE } from './searchConst'

const initialState = {
  data: '',
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHANGE:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer;