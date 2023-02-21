import { FETCH_ONLINE_ERROR, FETCH_ONLINE_SUCCESS } from "./fetchUserOnlineConst"

const initialState = {
    loading: true,
    data: 1,
    error: ''
}

const fetchOnlineReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ONLINE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_ONLINE_ERROR:
            return {
                ...state,
                loading: false,
                data: "🤯",
                error: action.payload
            }
        default:
            return state
    }
}

export default fetchOnlineReducer