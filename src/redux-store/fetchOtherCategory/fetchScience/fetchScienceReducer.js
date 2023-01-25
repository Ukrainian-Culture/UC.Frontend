import {
  errorMessage,
  FETCH_SCIENCE_ERROR,
  FETCH_SCIENCE_SUCCESS,
} from '../fetchOtherCategoryConst'

const initialState = {
  loading: true,
  data: [],
  error: '',
}

const fetchScienceReducer = (state = initialState, action) => {
  switch (action.type) {
    // science ----------------------------
    case FETCH_SCIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ``,
      }
    case FETCH_SCIENCE_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: `${action.error}`,
      }
    default:
      return state
  }
}

export default fetchScienceReducer
