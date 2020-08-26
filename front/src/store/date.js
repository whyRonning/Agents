import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import menuDate from "./menuDate";
import realtorsDate from "./realtorsDate";
import FormState from "./hiddenFormState";
import thunk from 'redux-thunk';
import alertReducer from "./alertReducer";
import {objReducer} from "./ObjectRecucer";
import preloaderReducer from "./preloaderReducer";
import {loginReducer} from "./loginReducer";
import { reducer as formReducer } from 'redux-form'
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
let reducers = combineReducers({FormState, menuDate, realtorsDate,alertReducer,objReducer,preloaderReducer,loginReducer,form: formReducer});
const store = createStore(reducers,enhancer
);

export default store;
