import { writable, derived } from 'svelte/store';

export const scene = writable(0);

export const bumpScene = (sceneNo) => {
  if (scene + 1 === sceneNo) {
    scene = sceneNo;
  } else {
    console.log(`${sceneNo} vs ${scene}`);
  }
};
