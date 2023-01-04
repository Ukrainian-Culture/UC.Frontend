import { CHANGE_CATEGORY, CHANGE_FILTER } from "./selectedCategoryConst";

const initialState = {
    category: "history",
    filter: "all"
}

const selectedCategoryReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_CATEGORY:
            return { ...state, category: action.payload }
        case CHANGE_FILTER:
            return { ...state, filter: action.payload }
        default:
            return state

    }
}

export default selectedCategoryReducer;