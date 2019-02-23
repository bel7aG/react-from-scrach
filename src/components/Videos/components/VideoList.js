import React from "react";
import PropTypes from "prop-types";
import { VideoItem } from "./";

const VideoList = ({ videos, handleVideoSelect }) => {
  const rendredList = videos.map((video, index) => {
    const { videoId } = video.id;
    return (
      <VideoItem
        key={videoId || index}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return <div className="video-list">{rendredList}</div>;
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
