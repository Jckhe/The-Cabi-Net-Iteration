 import { combineReducers } from 'redux';
 import spicesReducer from './spicesReducer';
 
 const reducers = combineReducers({
   spices: spicesReducer, 
 });
 
 export default reducers;
 