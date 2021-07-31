import { combineReducers } from "redux";
import productReducer from './productReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer
});

export default rootReducer;
