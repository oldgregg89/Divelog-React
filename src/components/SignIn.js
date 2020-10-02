import firebase from "firebase/app";
import React from "react";
import { withRouter } from 'react-router-dom';
// import button from "react-bootstrap/Button";

function Signin(props) {
  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
      props.history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      props.history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const doSignOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      this.props.history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit' variant="primary">Sign up</button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit' variant="primary">Sign in</button>
      </form>
      <h1>Sign Out</h1>
      <button variant="primary" onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  )
}

export default withRouter(Signin)
