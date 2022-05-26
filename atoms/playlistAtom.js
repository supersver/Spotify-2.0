// Global state
import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState", //unique id(with respect to other atoms/selectors)
  default: null, //default value
});

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "4LnTQT9pZuyXG96WS9RNzU",
});
