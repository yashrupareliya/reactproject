//combine all reducers
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";


const reducers = combineReducers({
   
    cartReducer: cartReducer
})

export default reducers