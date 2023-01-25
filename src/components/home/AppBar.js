import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from 'components/base/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3
};

const AppBar = () => (
  <div>
    <MuiAppBar elevation={0} position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1 }} />
        <Link variant="h6" underline="none" color="inherit" href="#" sx={{ fontSize: 24 }}>
          Be2rist
        </Link>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Link color="inherit" variant="h6" underline="none" href="/login" sx={rightLink}>
            {'Sign In'}
          </Link>
        </Box>
      </Toolbar>
    </MuiAppBar>
    <Toolbar />
  </div>
);

export default AppBar;
