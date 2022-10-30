import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';

const Preloader = ({ loading, children }) => (loading ? (
    <Box pr={2} margin={2}>
      <Typography variant="h1">
        <Skeleton variant="text" />
      </Typography>
      <Skeleton variant="rect" width="100%" height={400} />
    </Box>
  ) : (
    { children }
  ));

export default Preloader;

Preloader.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool.isRequired,
};

Preloader.defaultProps = {
  children: <div />,
};
