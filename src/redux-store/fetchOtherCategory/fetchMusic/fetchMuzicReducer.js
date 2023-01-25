import { errorMessage, FETCH_MUSIC_ERROR, FETCH_MUSIC_SUCCESS } from "../fetchOtherCategoryConst"

const initialState = {
  loading: true,
  data: [],
  error: '',
}

const fetchMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    // music ----------------------------
    case FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ``,
      }
    case FETCH_MUSIC_ERROR:
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

export default fetchMusicReducer;