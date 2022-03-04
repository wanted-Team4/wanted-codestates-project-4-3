//atom.js
import { atom } from "recoil";

export const rightTitleAtom = atom({
  key: "rightTitleAtom",
  default: "available options",
});

export const leftTitleAtom = atom({
  key: "leftTitleAtom",
  default: "selected",
});

export const searchStateAtom = atom({
  key: "searchStateAtom",
  default: false,
});

export const fontSizeAtom = atom({
  key: "fontSizeAtom",
  default: 14,
});

export const boxWidthAtom = atom({
  key: "boxWidthAtom",
  default: 200,
});

export const boxHeightAtom = atom({
  key: "boxHeightAtom",
  default: 300,
});

export const onceMovingAtom = atom({
  key: "onceMovingAtom",
  default: null,
});

export const selectedNumAtom = atom({
  key: "selectedNumAtom",
  default: null,
});
