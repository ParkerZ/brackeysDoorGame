import * as ex from "excalibur";
import { loader } from "./resources";
import { MainMenu } from "./scenes/mainMenu";
import { LevelManager } from "./levelManager";
import { Player } from "./player";
import { AddCoinsEvent, GetRelicEvent, TakeDamageEvent } from "./events";
import { SCENE_TRANSITION_DURATION } from "./constants";

const engine = new ex.Engine({
  backgroundColor: ex.Color.fromHex("#000000"),
  width: 800,
  height: 700,
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

// Custom events
engine.on("loadnextlevel", () => {
  levelManager.loadNextLevel(engine);
});

engine.on("loadfirstlevel", () => {
  player.initialize(engine);
});

engine.on("loadshop", () => {
  levelManager.loadShop(engine);
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

  player.addCoins(engine, coinEvent.numCoins);
});

engine.on("takedamage", (event) => {
  let damageEvent = event as TakeDamageEvent;
  if (damageEvent.type !== "takedamage") return;

  player.takeDamage(damageEvent.damage);
});

engine.on("useescapeladder", () => {
  player.useLadder(engine);
  levelManager.loadNextLevel(engine);
});

engine.on("getrelic", (event) => {
  let relicEvent = event as GetRelicEvent;
  if (relicEvent.type !== "getrelic") return;

  console.log("GET RELIC", relicEvent.relic);
  player.addRelic(engine, relicEvent.relic);
});

// Start the engine
engine.start(loader).then(() => {
  engine.start("menu");
});

// For test hook
(window as any).engine = engine;
