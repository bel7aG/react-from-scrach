import React, { Component } from "react";
import { SearchBar, VideoList, VideoDetails } from "./components";
import { youtube } from "../../apis";

export default class Videos extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleTermSubmit();
  }

  handleTermSubmit = async term => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      const { items } = response.data;
      this.setState({
        videos: items
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleVideoSelect = selectedVideo => {
    this.setState({
      selectedVideo
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div>
        <h1>Videos component</h1>
        <SearchBar handleFormSubmit={this.handleTermSubmit} />
        <VideoDetails video={selectedVideo} />
        <VideoList videos={videos} handleVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}
