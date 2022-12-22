import React from 'react';
import { selectRoute } from 'services/routeSlice';
import { useSelector } from 'react-redux';
import FullScreenContainer from 'components/fullscreen/FullScreenContainer';
import AudioPlayer from 'components/player/AudioPlayer';
import VideoPlayer from 'components/player/VideoPlayer';

const mediaResolver = (point) => {
  switch (point.contentType) {
    case 'sound-collage':
      return <AudioPlayer key={point.id} point={point} />;
    case 'video':
      return <VideoPlayer key={point.id} point={point} />;
    default:
      return <div />;
  }
};

const PlayRoutePage = () => {
  const route = useSelector((state) => selectRoute(state));
  return (
    <FullScreenContainer>
      <div style={{ textAlign: 'center' }}>
        {route && route.points[0] && mediaResolver(route.points[0])}
      </div>
    </FullScreenContainer>
  );
};

export default React.memo(PlayRoutePage);
