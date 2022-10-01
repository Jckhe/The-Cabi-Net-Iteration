import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/index';

const store = configureStore(rootReducer);

export default store