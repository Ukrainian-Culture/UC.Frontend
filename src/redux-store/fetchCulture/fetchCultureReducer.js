import { FETCH_CULTURE_ERROR, FETCH_CULTURE_SUCCESS } from "./fetchCultureConst"

const initialState = {
    loading: true,
    data: {},
    error: ''
}

const fetchCultureReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CULTURE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_CULTURE_ERROR:
            return {
                ...state,
                loading: true,
                data: {},
                error: 'error in fetchCultureReducer'
            }
        default:
            return state
    }
}

export default fetchCultureReducer;