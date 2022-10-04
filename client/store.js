import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = configureStore(
    {reducer: reducers},
    composeWithDevTools(applyMiddleware(thunk)),
    );

export default store