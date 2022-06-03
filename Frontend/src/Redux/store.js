import {createStore , combineReducers,applyMiddleware} from "redux";
import { ShirtReducer } from "./Shirt/reducer";
import { TshirtReducer } from "./Tshirt/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({


shirt : ShirtReducer,
tshirt : TshirtReducer,

})

export const store = createStore(rootReducer,applyMiddleware(thunk))