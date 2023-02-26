import {
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  USER_CHANGE_CONFIRM_TOKEN,
  USER_CHANGE_EMAIL,
  USER_CHANGE_EMAIL_PASSWORD_ERROR,
  USER_CLEAR_EMAIL_PASSWORD_ERROR,
  USER_CLEAR_ERROR,
  USER_LOGOUT,
  USER_REGISTRATION_CALL,
  USER_UPDATE_TOKENS,
} from './fetchUserConst'

const initialState = {
  loading: true,
  data: {
    role: 'notuser',
    email: '',
    accessToken: '',
    refreshToken: '',
    confirmToken: '',
    startDate: [],
    endDate: [],
    daysAmount: 0,
  },
  error: '',
}


const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload,
          // ...FormatData(action.payload),
        },
        error: '',
      }
    case USER_REGISTRATION_CALL:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          ...action.payload,
        },
        error: '',
      }
    case USER_LOGOUT:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          role: 'notuser',
          email: '',
          accessToken: '',
          refreshToken: '',
          startDate: [],
          endDate: [],
          daysAmount: 0,
        },
        error: '',
      }
    case USER_UPDATE_TOKENS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
        error: '',
      }
    case USER_CHANGE_CONFIRM_TOKEN:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          confirmToken: action.payload,
        },
        error: '',
      }
    case USER_CHANGE_EMAIL:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          email: action.payload,
        },
        error: '',
      }
    case USER_CHANGE_EMAIL_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        data: { ...state.data },
        error: action.error,
      }
    case USER_CLEAR_EMAIL_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        data: { ...state.data },
        error: '',
      }
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: true,
        data: { ...state.data },
        error: action.error,
      }
    case USER_CLEAR_ERROR:
      return {
        ...state,
        loading: true,
        data: { ...state.data },
        error: '',
      }
    default:
      return state
  }
}

export default fetchUserReducer
