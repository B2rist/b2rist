import React, { useEffect, useState } from 'react';
import { authStateChanges } from 'firebaseService';
import AppRouter from 'components/root/AppRouter';
import Preloader from 'components/root/Preloader';
import { useDispatch } from 'react-redux';
import { userChanged } from 'services/userSlice';

const AuthenticationProvider = () => {
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(
    () =>
      authStateChanges((user) => {
        dispatch(userChanged(user));
        if (!initialized) {
          setInitialized(true);
        }
      }),
    [dispatch, initialized]
  );

  return initialized ? <AppRouter /> : <Preloader loading />;
};

export default AuthenticationProvider;
