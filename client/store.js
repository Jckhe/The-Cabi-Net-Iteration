import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/index';
import thunk from 'redux-thunk';


const store = configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
    );

export default store