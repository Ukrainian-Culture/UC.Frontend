import { FETCH_HISTORY_ERROR, FETCH_HISTORY_SUCCESS } from "./fetchHistoryConst"

const initialState = {
  loading: true,
  data: [],
  error: '',
}

const fetchHistoryReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_HISTORY_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_HISTORY_ERROR:
            return{
                ...state,
                loading: false,
                data: [],
                error: 'error in fetchHistoryReducer'
            }
        default:
            return state
    }
}

export default fetchHistoryReducer;