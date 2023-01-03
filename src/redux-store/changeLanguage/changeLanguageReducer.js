import { CHANGE_LANGUAGE } from "./changeLanguageConst";

const initialState = {
    lang: "1"
}

const changeLanguageReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_LANGUAGE:
            return { ...state, lang: action.payload }
        default:
            return state
    }
}

export default changeLanguageReducer;