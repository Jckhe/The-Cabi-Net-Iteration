import React, {useEffect, useState} from 'react';
import {LoginPage} from '../components/Login.jsx';
// import {Buffer} from 'buffer';
// Buffer.from('anything','base64');
import {userActionCreator} from '../actions/actions'
import MainContainer from './MainContainer.jsx';
import { connect, useStore, useDispatch } from 'react-redux';
import '../style.css';


export default function App() {
  const [username, setUsername] = useState('');
  const [LoggedIn, toggleLoggedIn ] = useState(false);
  const dispatch = useDispatch();

  //this function will be passed down as a prop into <LoginPage />
	//so when the user clicks on submit/login, the state variable "LoggedIn" will get procced to true here
  function loginHandler(username, password) {
		// setUsername(username);
    // const username = username;
    console.log('loginhandler');
    fetch('/users/login/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': 'application/json',
        'X-Trigger': 'CORS'
      }, 
      body: JSON.stringify(
        {
          username: username,
          password: password
        })
    })
      .then((res)=> {
        console.log('loginHandler: ', res);
        if(res.status === 200){
          setUsername(username)
		      toggleLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log('loginHandler error: ', err);
      })
	}

  const logoutHandler = () => {
    toggleLoggedIn(false)
  }

  useEffect(() => {
    console.log('LoggedIn');
   if (LoggedIn) dispatch(userActionCreator(username));
  }, [LoggedIn])

  return (
    <div className='appDiv'>
      {LoggedIn ? <MainContainer logout={logoutHandler} />: <LoginPage loginHandler={loginHandler} />} 
    </div>
  );
};