import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTackIdState", //unique id(with respect to other atoms/selectors)
  default: null, //default value
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
