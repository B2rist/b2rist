import React from 'react';
import AppHeader from 'components/header/AppHeader';
import browserHistory from 'browserHistory';
import { Button } from '@mui/material';
import { logout, user } from 'firebaseService';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { i18n } = useTranslation();

  const onLogin = () => browserHistory.push('/login');

  const onLogout = () => logout();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <AppHeader text="Profile" />
      {user ? (
        <div>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      ) : (
        <Button onClick={onLogin}>Login</Button>
      )}
      <Button onClick={() => changeLanguage('ru')}>ru</Button>
      <Button onClick={() => changeLanguage('en')}>en</Button>
    </div>
  );
};

export default ProfilePage;
