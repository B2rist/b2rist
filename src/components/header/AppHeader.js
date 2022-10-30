import React from 'react';
import { Typography } from '@mui/material';
import './AppHeader.css';
import PropTypes from 'prop-types';

const AppHeader = ({ text }) => (
  <div>
    <header className="app-header">
      <Typography variant="h6">{text}</Typography>
    </header>
  </div>
);

export default AppHeader;

AppHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
