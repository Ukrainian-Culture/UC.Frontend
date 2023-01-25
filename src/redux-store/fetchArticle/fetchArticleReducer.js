import { FETCH_ARTICLE_ERROR, FETCH_ARTICLE_SUCCESS } from "./fetchArticleConst"

const initialState = {
    loading: true,
    data: {},
    error: ''
}

const fetchArticleReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_ARTICLE_ERROR:
            return {
                ...state,
                loading: false,
                data: {},
                error: `${action.error}`
            }
        default:
            return state
    }
}

export default fetchArticleReducer;