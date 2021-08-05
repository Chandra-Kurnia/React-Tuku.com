import { combineReducers } from "redux";
import productReducer from './productReducer'
import userReducer from './userReducer'
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: CartReducer
});

export default rootReducer;
