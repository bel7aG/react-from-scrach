import React from "react";
import PropTypes from "prop-types";

const VideoItem = ({ video, handleVideoSelect }) => {
  const { title, description, thumbnails } = video.snippet;
  const { height, width, url } = thumbnails.high;
  return (
    <div className="video-item" onClick={() => handleVideoSelect(video)}>
      <div className="video-title">
        <span className="title">{title}</span>
      </div>
      <div className="">
        <img src={url} className="ui medium circular image" alt="title" />
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoItem;
