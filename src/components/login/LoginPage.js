import { user, signInWithGoogle } from 'firebaseService';
import React from 'react';
import GoogleButton from 'react-google-button';
import './LoginPage.css';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const onLogin = () => signInWithGoogle();
  return (
    <div className="content">
      <div className="text">Login Form</div>
      {!user ? <GoogleButton onClick={onLogin} /> : <Navigate to="/" />}
    </div>
  );
};

export default LoginPage;
