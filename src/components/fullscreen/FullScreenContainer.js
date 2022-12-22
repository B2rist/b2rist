import React, { useEffect, useRef } from 'react';
import * as PropTypes from 'prop-types';
import './FullScreenContainer.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const FullScreenContainer = ({ children }) => {
  const iconButton = useRef();

  const hideButton = () => setTimeout(() => {
    iconButton.current.style.opacity = 0;
  }, 5000);

  const showButton = () => {
    iconButton.current.style.opacity = 1;
    hideButton();
  };

  useEffect(() => {
    hideButton();
  }, []);

  return (
    <Box onClick={showButton}>
      <IconButton id="closeIcon" ref={iconButton} component={Link} to="/routes">
        <CloseIcon />
      </IconButton>
      {children}
    </Box>
  );
};

export default FullScreenContainer;

FullScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
