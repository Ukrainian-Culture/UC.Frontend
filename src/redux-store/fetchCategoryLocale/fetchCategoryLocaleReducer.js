import {
  FETCH_CATEGORY_LOCALE_ERROR,
  FETCH_CATEGORY_LOCALE_SUCCESS,
} from './fetchCategoryLocaleConst'

const initialState = {
  loading: true,
  data: {},
  error: '',
}

const fetchCategoryLocaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_LOCALE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      }
    case FETCH_CATEGORY_LOCALE_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: 'error in fetchCategoryLocaleConst',
      }
    default:
      return state
  }
}

export default fetchCategoryLocaleReducer;
