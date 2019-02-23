import React, { Component } from "react";
import { SearchBar, VideoList, VideoDetails } from "./components";
import { youtube } from "../../apis";

export default class Videos extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    const randomSearch = ["tunisia", "reactjs", "es6", "asus gl 704gm"];
    this.handleTermSubmit(
      randomSearch[Math.floor(Math.random() * randomSearch.length - 1) + 1]
    );
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
        videos: items,
        selectedVideo: items[0]
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
        {selectedVideo && <VideoDetails video={selectedVideo} />}
        <VideoList videos={videos} handleVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}
