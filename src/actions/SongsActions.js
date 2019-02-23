import { SONG_SELECTED } from "./types";

export const selectSong = payload => ({
  type: SONG_SELECTED,
  payload
});
