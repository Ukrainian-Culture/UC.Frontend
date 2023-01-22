import { CHANGE_SCREENWIDTH } from "./screenWidthConst";

const initialState = {
    width: 0
}

const screenWidthReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_SCREENWIDTH:
            return { ...state, width: action.payload }
        default:
            return state
    }
}

export default screenWidthReducer;