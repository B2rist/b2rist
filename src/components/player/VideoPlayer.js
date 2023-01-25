import React from "react";
import Card from "@mui/material/Card";
import * as PropTypes from "prop-types";
import "./VideoPlayer.css";

const VideoPlayer = ({ point }) => (
  <Card sx={{ textAlign: "center" }}>
    <video width="320" height="240" controls autoPlay muted>
      <source src={point.videoContent} type="video/mp4" />
    </video>
  </Card>
);

export default VideoPlayer;

VideoPlayer.propTypes = {
  point: PropTypes.object.isRequired,
};
