/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';
 import spicesReducer from './spicesReducer';
 const reducers = combineReducers({
   spices: spicesReducer, 
 });
 
 export default reducers;
 