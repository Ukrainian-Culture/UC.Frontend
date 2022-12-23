import { CHANGE_OBLAST } from "./selectedOblastConst";

const initialState = {
    selectedOblast: ""
}

const selectedOblastReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_OBLAST:
            return { ...state, selectedOblast: action.payload }
        default:
            return state;
    }
}

export default selectedOblastReducer;