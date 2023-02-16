import { USER_HISTORY_ERROR, USER_HISTORY_SUCCESS } from "./fetchUserHistoryConst"

const initialState = {
    loading: true,
    data: [],
    error:''
}

const fetchUserHistoryReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_HISTORY_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case USER_HISTORY_ERROR:
            return{
                ...state,
                loading: false,
                data: [],
                error: action.error
            }
        default:
            return state
    }
}

export default fetchUserHistoryReducer;