import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RouteCard = ({ route }) => (
    <Card sx={{ display: 'flex', margin: '.5em' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {route.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {route.description?.slice(30)}
          </Typography>
        </CardContent>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 1,
          pb: 1,
        }}
        >
          <IconButton aria-label="play" component={Link} to={`/play/${route.id}`}>
            <PlayArrowIcon sx={{
              height: 38,
              width: 38,
            }}
            />
          </IconButton>
          <IconButton aria-label="add-favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={route.cover}
        alt="Live from space album cover"
      />
    </Card>
  );

export default RouteCard;

RouteCard.propTypes = {
  route: PropTypes.object.isRequired,
};
