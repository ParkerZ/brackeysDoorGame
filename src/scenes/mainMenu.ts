import * as ex from "excalibur";
import { MenuBackground } from "../menuBackground";
import { backgroundMenuSprite } from "../resources";
import { Door } from "../door";
import { StairsNextLevel } from "../doorContents/stairsNextLevel";

export class MainMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundMenuSprite);
    const door = new Door(
      engine.halfDrawWidth,
      (engine.halfDrawHeight / 2) * 3,
      StairsNextLevel
    );

    engine.add(bg);
    engine.add(door);
  }
}
