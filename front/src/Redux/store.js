import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { acadReducer } from "./Academics/reducer";


import { authReducer } from "./Auth/reducer";
import { eventReducer } from "./Event/reducer";
import { registerReducer } from "./Register/reducer";
import { studentReducer } from "./Students/Reducer";



const rootReducer= combineReducers({
    user:authReducer,
    register:registerReducer,
    students:studentReducer,
    event:eventReducer,
    academics:acadReducer

})
const logger = applyMiddleware(thunk);

const composeEnhancer= compose(logger,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer,composeEnhancer) 