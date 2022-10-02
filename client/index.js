import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'; // I dont think we need this. probably only used when working with class components
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import store from './store';
import style from './style.css';

// Use this render after the store is configured and working properly!
// ReactDOM.render(
//   <Provider store={store}>
//     <App />,
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));