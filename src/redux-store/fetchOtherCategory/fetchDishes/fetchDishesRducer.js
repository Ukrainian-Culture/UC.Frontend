import { errorMessage, FETCH_DISHES_ERROR, FETCH_DISHES_SUCCESS } from "../fetchOtherCategoryConst"

const initialState = {
  loading: true,
  data: [],
  error: '',
}

const fetchDishesReducer = (state = initialState, action) => {
  switch (action.type) {
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
        error: `${action.error}`,
      }
    default:
      return state
  }
}

export default fetchDishesReducer;