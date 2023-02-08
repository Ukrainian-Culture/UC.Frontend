import { FETCH_USER_SUCCESS } from './fetchUserConst'

const initialState = {
  loading: false,
  data: {
    role: 'user',
  },
  error: '',
}

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.error,
      }
    default:
      return state
  }
}

export default fetchUserReducer;