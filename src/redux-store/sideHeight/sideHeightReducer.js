import { CHANGE_SIDEHEIGHT, GET_SIDEHEIGHT } from "./sideHeightConst"

const initialState = {
  class: '',
}

const sideHeightReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_SIDEHEIGHT:
            return { ...state, class: action.payload }
        default:
            return state
    }
}

export default sideHeightReducer;
