import React, { useMemo, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';
import './AudioPlayer.css';
import { audioLink, imageLink } from 'utils/googleLinks';

const AudioPlayer = ({ point }) => {
  const timeMap = useMemo(() => {
    const images = [...point.images];
    images.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      }
      if (a.time > b.time) {
        return 1;
      }
      return 0;
    });
    return images;
  }, [point]);
  const [currentImage, setCurrentImage] = useState(timeMap[0]);

  const onTimeUpdate = (event) => {
    const time = event.nativeEvent.srcElement.currentTime;
    let imageKey = timeMap[0];
    for (const timeMapKey of timeMap) {
      if (time > timeMapKey.time) {
        imageKey = timeMapKey;
      } else break;
    }
    if (imageKey !== currentImage) {
      setCurrentImage(imageKey);
    }
  };

  return (
    <Card sx={{ textAlign: 'center' }}>
      <CardContent className="audio-control-card">
        <Typography component="div" variant="h5">
          <audio controls="controls" style={{ width: '600px' }} onTimeUpdate={onTimeUpdate} autoPlay>
            <source src={audioLink(point.audioContent)} />
          </audio>
        </Typography>
      </CardContent>
      <CardMedia component="img" image={imageLink(currentImage.image)} alt="route point" />
    </Card>
  );
};

export default AudioPlayer;

AudioPlayer.propTypes = {
  point: PropTypes.object.isRequired,
};
