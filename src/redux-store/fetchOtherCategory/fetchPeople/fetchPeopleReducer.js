import {
  errorMessage,
  FETCH_PEOPLE_ERROR,
  FETCH_PEOPLE_SUCCESS,
} from '../fetchOtherCategoryConst'

const initialState = {
  loading: true,
  data: [],
  error: '',
}

const fetchPeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    // people ----------------------------
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ``,
      }
    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: `${errorMessage} people`,
      }
    default:
      return state
  }
}

export default fetchPeopleReducer;
