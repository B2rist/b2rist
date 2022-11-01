import React from 'react';
import * as PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { user } from 'firebaseService';

const ProtectedRoute = ({ route }) => (user ? route.element : <Navigate to="/login" />);

ProtectedRoute.propTypes = {
  route: PropTypes.object.isRequired,
};

export default ProtectedRoute;
