import * as ex from "excalibur";

const bgMenuFile = require("./res/main.png");
const bgLevelFile = require("./res/level.png");
const bgWinFile = require("./res/win.png");

const doorClosedFile = require("./res/doorClosed.png");
const doorOpenFile = require("./res/doorOpen.png");

const stairsFile = require("./res/stairs.png");

const Resources = {
  backgroundMenu: new ex.ImageSource(bgMenuFile),
  backgroundLevel: new ex.ImageSource(bgLevelFile),
  backgroundWin: new ex.ImageSource(bgWinFile),
  doorClosed: new ex.ImageSource(doorClosedFile),
  doorOpen: new ex.ImageSource(doorOpenFile),
  stairs: new ex.ImageSource(stairsFile),
};

const loader = new ex.Loader();
loader.suppressPlayButton = true;

const backgroundMenuSprite = Resources.backgroundMenu.toSprite();
const backgroundLevelSprite = Resources.backgroundLevel.toSprite();
const backgroundWinSprite = Resources.backgroundWin.toSprite();
const doorClosedSprite = Resources.doorClosed.toSprite();
const doorOpenSprite = Resources.doorOpen.toSprite();
const stairsSprite = Resources.stairs.toSprite();

for (const res in Resources) {
  loader.addResource((Resources as any)[res]);
}

export {
  Resources,
  loader,
  backgroundMenuSprite,
  backgroundLevelSprite,
  backgroundWinSprite,
  doorClosedSprite,
  doorOpenSprite,
  stairsSprite,
};
