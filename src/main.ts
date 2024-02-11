import * as ex from "excalibur";
import { loader } from "./resources";
import { MainMenu } from "./mainMenu";

const engine = new ex.Engine({
  backgroundColor: ex.Color.fromHex("#b2ebf7"),
  width: 800,
  height: 600,
  fixedUpdateFps: 60,
});

// Set global gravity, 800 pixels/sec^2
// ex.Physics.acc = new ex.Vector(0, 2500);

// Create global collision groups
// ex.CollisionGroupManager.create("player");
// ex.CollisionGroupManager.create("floor");
// ex.CollisionGroupManager.create("items");
// ex.CollisionGroupManager.create("tree");

// title screen - level and tutorial are created in menu
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

// Start the engine
engine.start(loader).then(() => {});

// For test hook
(window as any).engine = engine;
