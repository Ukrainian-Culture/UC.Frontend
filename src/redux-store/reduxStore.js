import {createStore, combineReducers} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import themeReducer from "./themeState/themeReducer"
import sideHeightReducer from "./sideHeight/sideHeightReducer"
import aboutOblastReducer from "./aboutOblast/aboutOblastReducer"
import selectedOblastReducer from "./selectedOblast/selectedOblastReducer"
import categoriesInfoBlockReducer from "./categoriesInfoBlock/categoriesInfoBlockReducer"

const rootReducer = combineReducers({
    theme: themeReducer,
    sideHeight: sideHeightReducer,
    aboutOblast: aboutOblastReducer,
    selectedOblast: selectedOblastReducer,
    categoriesInfoBlock: categoriesInfoBlockReducer
})

export const store = createStore(rootReducer, composeWithDevTools())