import {createStore, combineReducers} from 'redux'
import inputReducer from "./inputReducer";
import resultReducer from "./resultReducer";
import dopDataReducer from "./dopDataReducer";

const rootReducer = combineReducers({
    inputReducer,
    resultReducer,
    dopDataReducer
})

const store = createStore(rootReducer)

window.store = store

export default store