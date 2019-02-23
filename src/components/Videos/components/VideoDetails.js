import React from "react";
import PropTypes from "prop-types";

const VideoDetails = ({ video }) => {
  console.log(video);
  return <div>video</div>;
};

VideoDetails.propTypes = {
  video: PropTypes.object
};

export default VideoDetails;
