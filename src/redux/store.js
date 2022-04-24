import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk'
import rootReducer from "./rootReducer";

// const loggerMiddleware = store => next => action => {
//     const result = next(action)
//     console.log('Middleware', store.getState())
//     return result
// }

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))