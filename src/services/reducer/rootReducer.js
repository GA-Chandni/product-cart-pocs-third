//Combined 
import { combineReducers } from 'redux';

//Reducer 
import {AddToCartReducer} from './basketReducer';


//Combine all ruducer 
export default combineReducers({
    addToCartState:AddToCartReducer,
})