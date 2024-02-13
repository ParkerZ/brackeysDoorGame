import * as ex from "excalibur";
import { loader } from "./resources";
import { MainMenu } from "./scenes/mainMenu";
import { LevelManager } from "./levelManager";
import { Player } from "./player";
import { AddCoinsEvent, GetHealthPotionEvent, TakeDamageEvent } from "./events";
import { Level1 } from "./scenes/levels/level1";
import { SCENE_TRANSITION_DURATION } from "./constants";

const engine = new ex.Engine({
  backgroundColor: ex.Color.fromHex("#b2ebf7"),
  width: 800,
  height: 600,
  fixedUpdateFps: 60,
  // TODO: WebAudio.unlock to unlock audio https://excaliburjs.com/docs/loaders#loader
  suppressPlayButton: true,
});

const player = new Player();

// keeps track of which level to load next
const levelManager = new LevelManager(player);

// title screen
const menu = new MainMenu();

engine.add("menu", {
  scene: menu,
  transitions: {
    out: new ex.FadeInOut({
      duration: SCENE_TRANSITION_DURATION,
      direction: "out",
      color: ex.Color.Black,
    }),
  },
});

// Game events to handle
engine.on("hidden", () => {
  engine.stop();
});
// engine.on("visible", () => {
//   engine.start();
// });

// Custom events
engine.on("loadnextlevel", () => {
  levelManager.loadNextLevel(engine);
});

engine.on("loadfirstlevel", () => {
  player.initialize(engine);
});

engine.on("gethealthpotion", () => {
  player.gainHealth(1);
});

engine.on("getescapeladder", () => {
  player.addEscapeLadder(engine);
});

engine.on("getshield", () => {
  player.addShield();
});

engine.on("getkey", () => {
  player.addKey(engine);
});

engine.on("addcoins", (event) => {
  let coinEvent = event as AddCoinsEvent;
  if (coinEvent.type !== "addcoins") return;

  player.addCoins(coinEvent.numCoins);
});

engine.on("takedamage", (event) => {
  let damageEvent = event as TakeDamageEvent;
  if (damageEvent.type !== "takedamage") return;

  player.takeDamage(damageEvent.damage);
});

engine.on("useescapeladder", (event) => {
  player.useLadder(engine);
  levelManager.loadNextLevel(engine);
});

// Start the engine
engine.start(loader).then(() => {
  engine.start("menu");
});

// For test hook
(window as any).engine = engine;
