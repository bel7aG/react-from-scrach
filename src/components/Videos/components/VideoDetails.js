import React from "react";
import PropTypes from "prop-types";
import "./video.css";

const VideoDetails = ({ video }) => {
  const { snippet, id } = video;
  console.log(video);
  const src = `https://www.youtube.com/embed/${id.videoId}`;
  return (
    <div className="video-details">
      <div className="ui embed">
        <iframe src={src} frameBorder="0" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

VideoDetails.propTypes = {
  video: PropTypes.object
};

export default VideoDetails;
