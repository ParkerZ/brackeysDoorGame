import * as ex from "excalibur";
import { MenuBackground } from "../ui/menuBackground";
import { backgroundMenuSprite } from "../resources";
import { Door } from "../doors/door";
import { StairsNextLevel } from "../doors/contents/stairsNextLevel";

export class MainMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundMenuSprite);
    const door = new Door(StairsNextLevel);
    door.setPos(engine.halfDrawWidth, (engine.halfDrawHeight / 2) * 3);

    engine.add(bg);
    engine.add(door);
  }
}
