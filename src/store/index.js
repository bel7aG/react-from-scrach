import { createStore, combineReducers } from "redux";
import {
  songsReducer as songs,
  selectedSongReducer as selectedSong
} from "reducers";

export default () => {
  const store = createStore(
    combineReducers({
      songs: combineReducers({
        songs,
        selectedSong
      })
    })
  );
  return store;
};
