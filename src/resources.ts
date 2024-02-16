import * as ex from "excalibur";

// sounds
const soundtrackFile = require("../res/sounds/soundtrack.wav");
const loseSound = require("../res/sounds/lose.wav");
const doorOpen1Sound = require("../res/sounds/doorOpen1.mp3");
const doorOpen2Sound = require("../res/sounds/doorOpen2.mp3");
const doorOpen3Sound = require("../res/sounds/doorOpen3.mp3");
const coin1Sound = require("../res/sounds/coin1.wav");
const coin2Sound = require("../res/sounds/coin2.wav");
const coin3Sound = require("../res/sounds/coin3.wav");
const healSound = require("../res/sounds/heal.wav");
const unlockSound = require("../res/sounds/unlock.wav");
const revealSound = require("../res/sounds/reveal.wav");
const pickupSound = require("../res/sounds/pickup.wav");
const hurtSound = require("../res/sounds/hurt.wav");
const blockSound = require("../res/sounds/block.wav");
const useSound = require("../res/sounds/use.wav");
const stepsSound = require("../res/sounds/steps.wav");

const bgMenuFile = require("../res/main.png");
const bgLevelFile = require("../res/level.png");
const bgWinFile = require("../res/win.png");
const bgLoseFile = require("../res/lose.png");

const doorClosedFile = require("../res/doorClosed.png");
const doorOpenFile = require("../res/doorOpen.png");
const doorRevealFile = require("../res/doorReveal.png");
const doorClosedLockedFile = require("../res/doorClosedLocked.png");
const doorRevealLockedFile = require("../res/doorRevealLocked.png");

// door contents
const stairsFile = require("../res/stairs.png");
const coinFile = require("../res/coin.png");
const coin2File = require("../res/coin2.png");
const enemyFile = require("../res/enemy.png");
const enemySmallFile = require("../res/enemySmall.png");
const heartFile = require("../res/heart.png");
const heartEmptyFile = require("../res/heartEmpty.png");
const ladderFile = require("../res/ladder.png");
const shieldFile = require("../res/shield.png");
const keyFile = require("../res/key.png");
const shopFile = require("../res/shop.png");
const metalDetectorFile = require("../res/metalDetector.png");

// relic
const livingShieldFile = require("../res/livingShield.png");
const doorOpenerFile = require("../res/crowbar.png");
const piggyBankFile = require("../res/piggybank.png");
const boneFingerFile = require("../res/boneFinger.png");
const spyglassFile = require("../res/spyglass.png");
const extraLifeFile = require("../res/extraLife.png");
const lockPickFile = require("../res/lockPick.png");

const Resources = {
  sounds: {
    sountrack: new ex.Sound(soundtrackFile),
    lose: new ex.Sound(loseSound),
    doorOpen1: new ex.Sound(doorOpen1Sound),
    doorOpen2: new ex.Sound(doorOpen2Sound),
    doorOpen3: new ex.Sound(doorOpen3Sound),
    coin1: new ex.Sound(coin1Sound),
    coin2: new ex.Sound(coin2Sound),
    coin3: new ex.Sound(coin3Sound),
    heal: new ex.Sound(healSound),
    unlock: new ex.Sound(unlockSound),
    reveal: new ex.Sound(revealSound),
    pickup: new ex.Sound(pickupSound),
    hurt: new ex.Sound(hurtSound),
    block: new ex.Sound(blockSound),
    use: new ex.Sound(useSound),
    steps: new ex.Sound(stepsSound),
  },

  backgroundMenu: new ex.ImageSource(bgMenuFile),
  backgroundLevel: new ex.ImageSource(bgLevelFile),
  backgroundWin: new ex.ImageSource(bgWinFile),
  backgroundLose: new ex.ImageSource(bgLoseFile),

  doorClosed: new ex.ImageSource(doorClosedFile),
  doorOpen: new ex.ImageSource(doorOpenFile),
  doorReveal: new ex.ImageSource(doorRevealFile),
  doorClosedLocked: new ex.ImageSource(doorClosedLockedFile),
  doorRevealLocked: new ex.ImageSource(doorRevealLockedFile),

  // door contents
  stairs: new ex.ImageSource(stairsFile),
  coin: new ex.ImageSource(coinFile),
  coin2: new ex.ImageSource(coin2File),
  enemy: new ex.ImageSource(enemyFile),
  enemySmall: new ex.ImageSource(enemySmallFile),
  heart: new ex.ImageSource(heartFile),
  heartEmpty: new ex.ImageSource(heartEmptyFile),
  ladder: new ex.ImageSource(ladderFile),
  shield: new ex.ImageSource(shieldFile),
  key: new ex.ImageSource(keyFile),
  shop: new ex.ImageSource(shopFile),
  metalDetector: new ex.ImageSource(metalDetectorFile),

  // relics
  livingShield: new ex.ImageSource(livingShieldFile),
  doorOpener: new ex.ImageSource(doorOpenerFile),
  piggyBank: new ex.ImageSource(piggyBankFile),
  boneFinger: new ex.ImageSource(boneFingerFile),
  spyglass: new ex.ImageSource(spyglassFile),
  extraLife: new ex.ImageSource(extraLifeFile),
  lockPick: new ex.ImageSource(lockPickFile),
};

const loader = new ex.Loader();

const backgroundMenuSprite = Resources.backgroundMenu.toSprite();
const backgroundLevelSprite = Resources.backgroundLevel.toSprite();
const backgroundWinSprite = Resources.backgroundWin.toSprite();
const backgroundLoseSprite = Resources.backgroundLose.toSprite();

const doorClosedSprite = Resources.doorClosed.toSprite();
const doorOpenSprite = Resources.doorOpen.toSprite();
const doorRevealSprite = Resources.doorReveal.toSprite();
const doorClosedLockedSprite = Resources.doorClosedLocked.toSprite();
const doorRevealLockedSprite = Resources.doorRevealLocked.toSprite();

// door contents
const stairsSprite = Resources.stairs.toSprite();
const coinSprite = Resources.coin.toSprite();
const coin2Sprite = Resources.coin2.toSprite();
const enemySprite = Resources.enemy.toSprite();
const enemySmallSprite = Resources.enemySmall.toSprite();
const heartSprite = Resources.heart.toSprite();
const heartEmptySprite = Resources.heartEmpty.toSprite();
const ladderSprite = Resources.ladder.toSprite();
const shieldSprite = Resources.shield.toSprite();
const keySprite = Resources.key.toSprite();
const shopSprite = Resources.shop.toSprite();
const metalDetectorSprite = Resources.metalDetector.toSprite();

// relics
const livingShieldSprite = Resources.livingShield.toSprite();
const doorOpenerSprite = Resources.doorOpener.toSprite();
const piggyBankSprite = Resources.piggyBank.toSprite();
const boneFingerSprite = Resources.boneFinger.toSprite();
const spyglassSprite = Resources.spyglass.toSprite();
const extraLifeSprite = Resources.extraLife.toSprite();
const lockPickSprite = Resources.lockPick.toSprite();

for (const res in Resources) {
  if (res !== "sounds") {
    loader.addResource((Resources as any)[res]);
    continue;
  }

  for (const sound in (Resources as any).sounds) {
    loader.addResource((Resources as any).sounds[sound]);
  }
}

export {
  Resources,
  loader,
  backgroundMenuSprite,
  backgroundLevelSprite,
  backgroundWinSprite,
  backgroundLoseSprite,
  doorClosedSprite,
  doorOpenSprite,
  doorRevealSprite,
  doorClosedLockedSprite,
  doorRevealLockedSprite,
  stairsSprite,
  coinSprite,
  coin2Sprite,
  enemySprite,
  enemySmallSprite,
  heartSprite,
  heartEmptySprite,
  ladderSprite,
  shieldSprite,
  keySprite,
  shopSprite,
  metalDetectorSprite,
  livingShieldSprite,
  doorOpenerSprite,
  piggyBankSprite,
  boneFingerSprite,
  spyglassSprite,
  extraLifeSprite,
  lockPickSprite,
};
