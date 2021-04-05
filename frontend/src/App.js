import logo from './logo.svg';
import React, {useState, useEffect } from "react";
import './App.css';
import fire from './fire';
import Login from './Login';
import LandingPage from './LandingPage';
import Admin from './Admin';
import SuperAdmin from './SuperAdmin';
import Student from './Student';
import CreateEvent from './CreateEvent';

import {
  BrowserRouter as Router, Route, Link, useHistory
} from "react-router-dom";
const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {

    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
      history.push('LandingPage')
  };
  const history = useHistory();

  const handleHistory = () => {
    history.push("login");
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)

      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    fire.auth().signOut();
    history.push('/')
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }
      else
      {
        setUser("");
      }
    })
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    
    <div className="App">
      <Route exact path = '/LandingPage'>

      <LandingPage 
      handleLogout = {handleLogout}
      />
      </Route>
      <Route exact path = '/CreateEvent'>
      <CreateEvent/>
      </Route>

      <Route exact path = '/'>

      <Login 
      email = {email} 
      setEmail = {setEmail} 
      password = {password} 
      setPassword = {setPassword} 
      handleLogin = {handleLogin} 
      handleSignup = {handleSignup}
      hasAccount = {hasAccount}
      setHasAccount = {setHasAccount}
      emailError = {emailError}
      passwordError = {passwordError}
      />
      </Route>

      )}
    
      <Route exact path = '/Admin'>
      <Admin
      handleLogout = {handleLogout}
      />
      </Route>
      <Route exact path = '/SuperAdmin'>
      <SuperAdmin
      handleLogout = {handleLogout}
      />
      </Route>
      <Route exact path = '/Student'>
      <Student
      handleLogout = {handleLogout}
      />
      </Route>

    </div>
  );
}

export default App;
