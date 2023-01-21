import {
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR,
  FETCH_DISHES_SUCCESS,
  FETCH_DISHES_ERROR,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_ERROR,
  FETCH_DOCUMENTS_SUCCESS,
  FETCH_DOCUMENTS_ERROR,
  FETCH_SCIENCE_SUCCESS,
  FETCH_SCIENCE_ERROR,
} from './fetchOtherCategoryConst'

const initialState = {
  people: {
    loading: true,
    data: [],
    error: '',
  },
  dishes: {
    loading: true,
    data: [],
    error: '',
  },
  music: {
    loading: true,
    data: [],
    error: '',
  },
  documents: {
    loading: true,
    data: [],
    error: '',
  },
  science: {
    loading: true,
    data: [],
    error: '',
  },
}

const fetchOtherCategory = (state = initialState, action) => {
  const errorMessage = 'error in fetching data for'

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

    // dishes ----------------------------
    case FETCH_DISHES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ``,
      }
    case FETCH_DISHES_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: `${errorMessage} dishes`,
      }

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
        error: `${errorMessage} music`,
      }

    // documents ----------------------------
    case FETCH_DOCUMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ``,
      }
    case FETCH_DOCUMENTS_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: `${errorMessage} documents`,
      }

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
        error: `${errorMessage} science`,
      }

    default:
      return state
  }
}

export default fetchOtherCategory
