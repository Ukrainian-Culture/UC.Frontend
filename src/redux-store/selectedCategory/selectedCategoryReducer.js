import { CHANGE_CATEGORY } from "./selectedCategoryConst";

const initialState = {
    category: "history"
}

const selectedCategoryReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_CATEGORY:
            return { ...state, category: action.payload }
        default:
            return state

    }
}

export default selectedCategoryReducer;