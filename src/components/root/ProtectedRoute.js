import React, { useContext } from 'react';
import * as PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { Context } from 'services/Store';
import { authentication } from 'firebaseService';

const ProtectedRoute = ({ route }) => {
  const [{ user }] = useContext(Context);
  if (authentication.checked && !user) {
    return <Navigate to="/login" />;
  }
  return route.element;
};

ProtectedRoute.propTypes = {
  route: PropTypes.object.isRequired,
};

export default ProtectedRoute;
