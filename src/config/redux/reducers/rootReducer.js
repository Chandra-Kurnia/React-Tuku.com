import { combineReducers } from "redux";
import productReducer from './productReducer'
import userReducer from './userReducer'
import CartReducer from "./CartReducer";
import Orderreducer from "./orderReducer";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: CartReducer,
    orders: Orderreducer
});

export default rootReducer;
