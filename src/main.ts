import * as ex from "excalibur";
import { loader } from "./resources";
import { MainMenu } from "./scenes/mainMenu";
import { LevelManager } from "./levelManager";

const engine = new ex.Engine({
  backgroundColor: ex.Color.fromHex("#b2ebf7"),
  width: 800,
  height: 600,
  fixedUpdateFps: 60,
});

// keeps track of which level to load next
const levelManager = new LevelManager();

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

engine.on("loadNextLevel", () => {
  levelManager.loadNextLevel(engine);
});

// Start the engine
engine.start(loader).then(() => {});

// For test hook
(window as any).engine = engine;
