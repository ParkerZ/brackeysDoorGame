import * as ex from "excalibur";
import { MenuBackground } from "../ui/menuBackground";
import { backgroundMenuSprite } from "../resources";
import { Door } from "../doors/door";
import { StairsFirstLevel } from "../doors/contents/stairsFirstLevel";

export class MainMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundMenuSprite);
    const door = new Door(StairsFirstLevel);
    door.setPos(engine.halfDrawWidth, (engine.halfDrawHeight / 3) * 4);

    engine.add(bg);
    engine.add(door);
  }
}
