import React, { useContext, useEffect } from 'react';
import { Context } from 'services/Store';
import { authStateChanges } from 'firebaseService';
import AppRouter from 'components/root/AppRouter';
import { userSuccess } from 'services/actions';

const Authentication = () => {
    const [, dispatch] = useContext(Context);
    useEffect(() => authStateChanges((user) => dispatch(userSuccess(user))), [dispatch]);
    return (
       <AppRouter />
    );
};

export default Authentication;
