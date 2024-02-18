import * as ex from "excalibur";
import { DOOR_CONTENTS_SPRITE_SCALE, DOOR_SPRITE_SCALE } from "./constants";

// sounds
const soundtrackFile = require("../res/sounds/soundtrack.wav");
const winSound = require("../res/sounds/win.wav");
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

const bgMenuFile = require("../res/title.png");
const bgLevelFile = require("../res/wall2.png");
const bgWinFile = require("../res/won.png");
const bgLoseFile = require("../res/lost.png");

const doorBackingFile = require("../res/doorBg.png");
const doorBackingHoverFile = require("../res/doorBgHover.png");
const doorClosedFile = require("../res/doorClosed.png");
const doorClosedHoverFile = require("../res/doorClosedHover.png");
const doorOpenFrame1File = require("../res/doorOpening1.png");
const doorOpenFrame2File = require("../res/doorOpening2.png");
const doorOpenFile = require("../res/doorOpening3.png");
const doorRevealFile = require("../res/doorReveal.png");
const doorClosedLockedFile = require("../res/doorLocked.png");
const doorUnlockingFile = require("../res/doorUnlocking.png");
const doorRevealLockedFile = require("../res/doorLockedReveal.png");
const doorRevealUnlockingFile = require("../res/doorUnlockingReveal.png");

// door contents
const stairsFile = require("../res/stairs.png");
const coin1File = require("../res/coin1.png");
const coin2File = require("../res/coin2.png");
const heartFile = require("../res/heart.png");
const heartEmptyFile = require("../res/heartEmpty.png");
const ladderFile = require("../res/ladder.png");
const shieldFile = require("../res/shield.png");
const keyFile = require("../res/key.png");
const shopFile = require("../res/shop.png");
const metalDetectorFile = require("../res/map.png");

// enemies
const enemyFrame1File = require("../res/enemy1.png");
const enemyFrame2File = require("../res/enemy2.png");
const enemyFrame3File = require("../res/enemy3.png");
const enemyFrame4File = require("../res/enemy4.png");
const enemySwordFrame1File = require("../res/enemySword1.png");
const enemySwordFrame2File = require("../res/enemySword2.png");
const enemySwordFrame3File = require("../res/enemySword3.png");

// relic
const livingShieldFile = require("../res/helm.png");
const doorOpenerFile = require("../res/crowbar.png");
const piggyBankFile = require("../res/chest.png");
const boneFingerFile = require("../res/warHorn.png");
const spyglassFile = require("../res/candle.png");
const extraLifeFile = require("../res/revive.png");
const lockPickFile = require("../res/skeletonKey.png");

const Resources = {
  sounds: {
    sountrack: new ex.Sound(soundtrackFile),
    win: new ex.Sound(winSound),
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

  doorBacking: new ex.ImageSource(doorBackingFile),
  doorBackingHover: new ex.ImageSource(doorBackingHoverFile),
  doorClosed: new ex.ImageSource(doorClosedFile),
  doorClosedHover: new ex.ImageSource(doorClosedHoverFile),
  doorOpeningFrame1: new ex.ImageSource(doorOpenFrame1File),
  doorOpeningFrame2: new ex.ImageSource(doorOpenFrame2File),
  doorOpen: new ex.ImageSource(doorOpenFile),
  doorReveal: new ex.ImageSource(doorRevealFile),
  doorClosedLocked: new ex.ImageSource(doorClosedLockedFile),
  doorUnlocking: new ex.ImageSource(doorUnlockingFile),
  doorRevealLocked: new ex.ImageSource(doorRevealLockedFile),
  doorRevealUnlocking: new ex.ImageSource(doorRevealUnlockingFile),

  // door contents
  stairs: new ex.ImageSource(stairsFile),
  coin1: new ex.ImageSource(coin1File),
  coin2: new ex.ImageSource(coin2File),
  heart: new ex.ImageSource(heartFile),
  heartEmpty: new ex.ImageSource(heartEmptyFile),
  ladder: new ex.ImageSource(ladderFile),
  shield: new ex.ImageSource(shieldFile),
  key: new ex.ImageSource(keyFile),
  shop: new ex.ImageSource(shopFile),
  metalDetector: new ex.ImageSource(metalDetectorFile),

  // enemies
  enemyFrame1: new ex.ImageSource(enemyFrame1File),
  enemyFrame2: new ex.ImageSource(enemyFrame2File),
  enemyFrame3: new ex.ImageSource(enemyFrame3File),
  enemyFrame4: new ex.ImageSource(enemyFrame4File),
  enemySwordFrame1: new ex.ImageSource(enemySwordFrame1File),
  enemySwordFrame2: new ex.ImageSource(enemySwordFrame2File),
  enemySwordFrame3: new ex.ImageSource(enemySwordFrame3File),

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

const doorBackingSprite = Resources.doorBacking.toSprite();
const doorBackingHoverSprite = Resources.doorBackingHover.toSprite();
const doorClosedSprite = Resources.doorClosed.toSprite();
const doorClosedHoverSprite = Resources.doorClosedHover.toSprite();
const doorOpeningFrame1Sprite = Resources.doorOpeningFrame1.toSprite();
const doorOpeningFrame2Sprite = Resources.doorOpeningFrame2.toSprite();
const doorOpenSprite = Resources.doorOpen.toSprite();
const doorRevealSprite = Resources.doorReveal.toSprite();
const doorClosedLockedSprite = Resources.doorClosedLocked.toSprite();
const doorUnlockingSprite = Resources.doorUnlocking.toSprite();
const doorRevealLockedSprite = Resources.doorRevealLocked.toSprite();
const doorRevealUnlockingSprite = Resources.doorRevealUnlocking.toSprite();

doorBackingSprite.scale = DOOR_SPRITE_SCALE;
doorBackingHoverSprite.scale = DOOR_SPRITE_SCALE;
doorClosedSprite.scale = DOOR_SPRITE_SCALE;
doorClosedHoverSprite.scale = DOOR_SPRITE_SCALE;
doorOpeningFrame1Sprite.scale = DOOR_SPRITE_SCALE;
doorOpeningFrame2Sprite.scale = DOOR_SPRITE_SCALE;
doorOpenSprite.scale = DOOR_SPRITE_SCALE;
doorRevealSprite.scale = DOOR_SPRITE_SCALE;
doorClosedLockedSprite.scale = DOOR_SPRITE_SCALE;
doorUnlockingSprite.scale = DOOR_SPRITE_SCALE;
doorRevealLockedSprite.scale = DOOR_SPRITE_SCALE;
doorRevealUnlockingSprite.scale = DOOR_SPRITE_SCALE;

const doorOpeningAnimation = new ex.Animation({
  frames: [
    {
      graphic: doorOpeningFrame1Sprite,
      duration: 25,
    },
    {
      graphic: doorOpeningFrame2Sprite,
      duration: 25,
    },
  ],
  strategy: ex.AnimationStrategy.Freeze,
});

// door contents
const stairsSprite = Resources.stairs.toSprite();
const coinSprite = Resources.coin1.toSprite();
const coin2Sprite = Resources.coin2.toSprite();
const heartSprite = Resources.heart.toSprite();
const heartEmptySprite = Resources.heartEmpty.toSprite();
const ladderSprite = Resources.ladder.toSprite();
const shieldSprite = Resources.shield.toSprite();
const keySprite = Resources.key.toSprite();
const shopSprite = Resources.shop.toSprite();
const metalDetectorSprite = Resources.metalDetector.toSprite();

stairsSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
coinSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
coin2Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
heartSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
heartEmptySprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
ladderSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
shieldSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
keySprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
shopSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
metalDetectorSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;

// enemies
const enemyFrame1Sprite = Resources.enemyFrame1.toSprite();
const enemyFrame2Sprite = Resources.enemyFrame2.toSprite();
const enemyFrame3Sprite = Resources.enemyFrame3.toSprite();
const enemyFrame4Sprite = Resources.enemyFrame4.toSprite();
const enemySwordFrame1Sprite = Resources.enemySwordFrame1.toSprite();
const enemySwordFrame2Sprite = Resources.enemySwordFrame2.toSprite();
const enemySwordFrame3Sprite = Resources.enemySwordFrame3.toSprite();

enemyFrame1Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
enemyFrame2Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
enemyFrame3Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
enemyFrame4Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
enemySwordFrame1Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
enemySwordFrame2Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
enemySwordFrame3Sprite.scale = DOOR_CONTENTS_SPRITE_SCALE;

const enemy1Animation = new ex.Animation({
  frames: [
    {
      graphic: enemyFrame1Sprite,
      duration: 100,
    },
    {
      graphic: enemyFrame2Sprite,
      duration: 100,
    },
    {
      graphic: enemyFrame3Sprite,
      duration: 100,
    },
    {
      graphic: enemyFrame4Sprite,
      duration: 100,
    },
  ],
  strategy: ex.AnimationStrategy.Loop,
});

const enemy2Animation = new ex.Animation({
  frames: [
    {
      graphic: enemySwordFrame1Sprite,
      duration: 100,
    },
    {
      graphic: enemySwordFrame2Sprite,
      duration: 100,
    },
    {
      graphic: enemySwordFrame3Sprite,
      duration: 100,
    },
  ],
  strategy: ex.AnimationStrategy.PingPong,
});

// relics
const helmSprite = Resources.livingShield.toSprite();
const crowbarSprite = Resources.doorOpener.toSprite();
const chestSprite = Resources.piggyBank.toSprite();
const warHornSprite = Resources.boneFinger.toSprite();
const candleSprite = Resources.spyglass.toSprite();
const extraLifeSprite = Resources.extraLife.toSprite();
const skeletonKeySprite = Resources.lockPick.toSprite();

helmSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
crowbarSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
chestSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
warHornSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
candleSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
extraLifeSprite.scale = DOOR_CONTENTS_SPRITE_SCALE;
skeletonKeySprite.scale = DOOR_CONTENTS_SPRITE_SCALE;

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
  doorBackingSprite,
  doorBackingHoverSprite,
  doorClosedSprite,
  doorClosedHoverSprite,
  doorOpenSprite,
  doorRevealSprite,
  doorClosedLockedSprite,
  doorUnlockingSprite,
  doorRevealLockedSprite,
  doorRevealUnlockingSprite,
  doorOpeningAnimation,
  stairsSprite,
  coinSprite,
  coin2Sprite,
  enemy1Animation,
  enemy2Animation,
  heartSprite,
  heartEmptySprite,
  ladderSprite,
  shieldSprite,
  keySprite,
  shopSprite,
  metalDetectorSprite,
  helmSprite,
  crowbarSprite,
  chestSprite,
  warHornSprite,
  candleSprite,
  extraLifeSprite,
  skeletonKeySprite,
};
