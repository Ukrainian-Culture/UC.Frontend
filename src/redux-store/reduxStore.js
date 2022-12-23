import {createStore, combineReducers} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import themeReducer from "./themeState/themeReducer"
import sideHeightReducer from "./sideHeight/sideHeightReducer"
import aboutOblastReducer from "./aboutOblast/aboutOblastReducer"
import selectedOblastReducer from "./selectedOblast/selectedOblastReducer"

const rootReducer = combineReducers({
    theme: themeReducer,
    sideHeight: sideHeightReducer,
    aboutOblast: aboutOblastReducer,
    selectedOblast: selectedOblastReducer
})

export const store = createStore(rootReducer, composeWithDevTools())