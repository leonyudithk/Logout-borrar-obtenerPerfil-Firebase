import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { citasReducers } from "../reducers/citasReducers";
import { reducerLogin } from "../reducers/reducerLogin";
import { reducersPlantas } from "../reducers/reducersPlantas";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    citasStore : citasReducers,
    login: reducerLogin,
    plantasStore: reducersPlantas
})


export const store= createStore(
    reducers,
        composeEnhancers(
        applyMiddleware(thunk)
    )
)

