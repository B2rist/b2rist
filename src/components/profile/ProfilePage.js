import React from 'react';
import AppHeader from 'components/header/AppHeader';
import { Button, Typography } from '@mui/material';
import { logout } from 'firebaseService';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'services/userSlice';

const ProfilePage = () => {
  const user = useSelector((state) => selectUser(state));
  const { i18n } = useTranslation();

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
          <Typography variant="h6">{user.displayName}</Typography>
        </div>
      ) : (
        <Button component={Link} to="/login">
          Login
        </Button>
      )}
      <Button onClick={() => changeLanguage('ru')}>ru</Button>
      <Button onClick={() => changeLanguage('en')}>en</Button>
    </div>
  );
};

export default ProfilePage;
