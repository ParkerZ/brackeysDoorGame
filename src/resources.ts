import * as ex from "excalibur";

const bgMenuFile = require("./res/main.png");
const bgLevelFile = require("./res/level.png");
const bgWinFile = require("./res/win.png");

const doorClosedFile = require("./res/doorClosed.png");
const doorOpenFile = require("./res/doorOpen.png");

const stairsFile = require("./res/stairs.png");
const coinFile = require("./res/coin.png");
const enemyFile = require("./res/enemy.png");
const heartFile = require("./res/heart.png");
const heartEmptyFile = require("./res/heartEmpty.png");
const ladderFile = require("./res/ladder.png");
const shieldFile = require("./res/shield.png");
const keyFile = require("./res/key.png");

const Resources = {
  backgroundMenu: new ex.ImageSource(bgMenuFile),
  backgroundLevel: new ex.ImageSource(bgLevelFile),
  backgroundWin: new ex.ImageSource(bgWinFile),
  doorClosed: new ex.ImageSource(doorClosedFile),
  doorOpen: new ex.ImageSource(doorOpenFile),
  stairs: new ex.ImageSource(stairsFile),
  coin: new ex.ImageSource(coinFile),
  enemy: new ex.ImageSource(enemyFile),
  heart: new ex.ImageSource(heartFile),
  heartEmpty: new ex.ImageSource(heartEmptyFile),
  ladder: new ex.ImageSource(ladderFile),
  shield: new ex.ImageSource(shieldFile),
  key: new ex.ImageSource(keyFile),
};

const loader = new ex.Loader();

const backgroundMenuSprite = Resources.backgroundMenu.toSprite();
const backgroundLevelSprite = Resources.backgroundLevel.toSprite();
const backgroundWinSprite = Resources.backgroundWin.toSprite();
const doorClosedSprite = Resources.doorClosed.toSprite();
const doorOpenSprite = Resources.doorOpen.toSprite();
const stairsSprite = Resources.stairs.toSprite();
const coinSprite = Resources.coin.toSprite();
const enemySprite = Resources.enemy.toSprite();
const heartSprite = Resources.heart.toSprite();
const heartEmptySprite = Resources.heartEmpty.toSprite();
const ladderSprite = Resources.ladder.toSprite();
const shieldSprite = Resources.shield.toSprite();
const keySprite = Resources.key.toSprite();

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
  coinSprite,
  enemySprite,
  heartSprite,
  heartEmptySprite,
  ladderSprite,
  shieldSprite,
  keySprite,
};
