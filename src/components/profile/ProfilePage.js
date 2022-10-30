import React, { useCallback, useContext } from 'react';
import AppHeader from 'components/header/AppHeader';
import { Context } from 'services/Store';
import browserHistory from 'browserHistory';
import { Button } from '@mui/material';
import { authentication, logout } from 'firebaseService';

const ProfilePage = () => {
  const [{ user }] = useContext(Context);

  const onLogin = useCallback(() => browserHistory.push('/login'), []);
  const onLogout = useCallback(() => logout(), []);
  return (
    <div>
      <AppHeader text="Profile" />
      {authentication.checked
        && (user ? (
          <div>
            <Button onClick={onLogout}>Logout</Button>
          </div>
        ) : (
          <Button onClick={onLogin}>Login</Button>
        ))}
    </div>
  );
};

export default ProfilePage;
