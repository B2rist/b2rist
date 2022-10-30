import { signInWithGoogle } from 'firebaseService';
import React, { useCallback, useContext, useEffect } from 'react';
import browserHistory from 'browserHistory';
import { Context } from 'services/Store';
import GoogleButton from 'react-google-button';

const LoginPage = () => {
  const [{ user }] = useContext(Context);
  const onLogin = useCallback(() => signInWithGoogle(), []);
  useEffect(() => {
    if (user) {
      browserHistory.push('/');
    }
  }, [user]);
  return (
    <div>
      <GoogleButton onClick={onLogin} />
    </div>
  );
};

export default LoginPage;
