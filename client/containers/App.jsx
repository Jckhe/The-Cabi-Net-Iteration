import React, {useEffect, useState} from 'react';
import {LoginPage} from '../components/Login.jsx'
import MainContainer from './MainContainer.jsx';
import { connect, useStore, useDispatch } from 'react-redux';
import '../style.css';

export default function App() {

  const [LoggedIn, toggleLoggedIn ] = useState(false);
	const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  //this function will be passed down as a prop into <LoginPage />
	//so when the user clicks on submit/login, the state variable "LoggedIn" will get procced to true here
  function loginHandler(username) {
		setUsername(username);
		toggleLoggedIn(true);
	}

  useEffect(() => {
    console.log('LoggedIn');
  }, [LoggedIn])

  return (
    <div>
      {LoggedIn ? <MainContainer /> : <LoginPage loginHandler = {loginHandler} />} 
    </div>
  );
};