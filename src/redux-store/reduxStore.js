import {createStore, combineReducers} from "redux"
import themeReducer from "./themeState/themeReducer"

const rootReducer = combineReducers({
    theme: themeReducer
})

export const store = createStore(rootReducer)