import { CHANGE_LANGUAGE } from './changeLanguageConst'

const initialState = {
  loading: true,
  lang: '1',
}

const changeLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, loading: false, lang: action.payload }
    default:
      return state
  }
}

export default changeLanguageReducer
