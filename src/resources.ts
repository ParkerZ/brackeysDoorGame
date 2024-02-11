import * as ex from "excalibur";

const bgMenuFile = require("./res/main.png");

const Resources = {
  backgroundMenu: new ex.ImageSource(bgMenuFile),
};

const loader = new ex.Loader();
loader.suppressPlayButton = true;

const backgroundMenuSprite = Resources.backgroundMenu.toSprite();

for (const res in Resources) {
  if (res !== "sounds") {
    loader.addResource((Resources as any)[res]);
    continue;
  }
  for (const sound in (Resources as any).sounds) {
    loader.addResource((Resources as any).sounds[sound]);
  }
}

export { Resources, loader, backgroundMenuSprite };
