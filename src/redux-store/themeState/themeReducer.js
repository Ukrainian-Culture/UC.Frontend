import { LIGHT, DARK } from "./themeConst";

const initialState = {
    theme: "light"
}

const themeReducer = (state = initialState, action) =>{
    switch(action.type){
        case LIGHT:
            return { ...state, theme: "light" }
        case DARK:
            return { ...state, theme: "dark" }
        default:
            return state
    }
}

export default themeReducer;