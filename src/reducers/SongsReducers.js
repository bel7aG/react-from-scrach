import { SONG_SELECTED } from "actions/types";

export const songsReducer = () => [
  { title: "belhassen", duration: "12:33" },
  { title: "Je suis Dégun", duration: "3:36" }
];

const selectedSongDefaultState = null;

export const selectedSongReducer = (
  state = selectedSongDefaultState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SONG_SELECTED:
      return payload;
    default:
      return state;
  }
};
