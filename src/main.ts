import * as ex from "excalibur";
import { Resources, loader } from "./resources";
import { MainMenu } from "./scenes/mainMenu";
import { LevelManager } from "./levelManager";
import { Player } from "./player";
import {
  AddCoinsEvent,
  DisableDoorsEvent,
  GetRelicEvent,
  TakeDamageEvent,
} from "./events";
import { SCENE_TRANSITION_DURATION, SOUNDTRACK_VOLUME } from "./constants";

function main(): void {
  const engine = new ex.Engine({
    backgroundColor: ex.Color.fromHex("#000000"),
    width: 800,
    height: 800,
    fixedUpdateFps: 60,
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
    Resources.sounds.sountrack.loop = true;
    Resources.sounds.sountrack.play(SOUNDTRACK_VOLUME);

    player.initialize(engine);
  });

  engine.on("loadshop", () => {
    levelManager.loadShop(engine);
  });

  engine.on("gethealthpotion", () => {
    player.gainHealth(1);
  });

  engine.on("getescapeladder", () => {
    Resources.sounds.pickup.play();
    player.addEscapeLadder(engine);
  });

  engine.on("getmetaldetector", () => {
    Resources.sounds.pickup.play();
    player.addMetalDetector(engine);
  });

  engine.on("getshield", () => {
    Resources.sounds.pickup.play();
    player.addShield();
  });

  engine.on("getkey", () => {
    Resources.sounds.pickup.play();
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

    player.takeDamage(engine, damageEvent.damage);
  });

  engine.on("useescapeladder", () => {
    Resources.sounds.use.play();
    player.useLadder(engine);
    levelManager.loadNextLevel(engine);
  });

  engine.on("usemetaldetector", () => {
    Resources.sounds.use.play();
    player.useMetalDetector(engine);
  });

  engine.on("getrelic", (event) => {
    let relicEvent = event as GetRelicEvent;
    if (relicEvent.type !== "getrelic") return;

    Resources.sounds.pickup.play();
    player.addRelic(engine, relicEvent.relic);
  });

  engine.on("playerdie", () => {
    const event = new DisableDoorsEvent();
    engine.emit(event.type, event);

    Resources.sounds.sountrack.pause();
    Resources.sounds.lose.play();
    levelManager.loadLoseMenu(engine);
  });

  engine.on("unlockdoor", () => {
    player.unlockDoor(engine);
  });

  // Start the engine
  engine.start(loader).then(() => {
    engine.start("menu");
  });

  // For test hook
  (window as any).engine = engine;
}

async function waitForFontLoad(font: string, timeout = 2000, interval = 100) {
  return new Promise((resolve, reject) => {
    // repeatedly poll check
    const poller = setInterval(async () => {
      try {
        await document.fonts.load(font);
      } catch (err) {
        reject(err);
      }
      if (document.fonts.check(font)) {
        clearInterval(poller);
        resolve(true);
      }
    }, interval);
    setTimeout(() => clearInterval(poller), timeout);
  });
}

// Load font before game start
// waitForFontLoad("Micro 5").then(() => {
//   main();
// });

main();
