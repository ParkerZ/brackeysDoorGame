import * as ex from "excalibur";
import { loader } from "./resources";
import { MainMenu } from "./scenes/mainMenu";
import { LevelManager } from "./levelManager";
import { Player } from "./player";
import { AddCoinsEvent, GetHealthPotionEvent, TakeDamageEvent } from "./events";

const engine = new ex.Engine({
  backgroundColor: ex.Color.fromHex("#b2ebf7"),
  width: 800,
  height: 600,
  fixedUpdateFps: 60,
});

// keeps track of which level to load next
const levelManager = new LevelManager();

const player = new Player();

// title screen
const menu = new MainMenu();

engine.add("menu", menu);

engine.goToScene("menu");

// Game events to handle
engine.on("hidden", () => {
  engine.stop();
});
engine.on("visible", () => {
  engine.start();
});

// Custom events
engine.on("loadnextlevel", () => {
  levelManager.loadNextLevel(engine);
});

engine.on("gethealthpotion", () => {
  player.gainHealth(1);
});

engine.on("getescapeladder", () => {
  player.addEscapeLadder(engine);
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

// Start the engine
engine.start(loader).then(() => {});

// For test hook
(window as any).engine = engine;
