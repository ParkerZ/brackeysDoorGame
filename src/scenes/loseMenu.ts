import * as ex from "excalibur";
import { MenuBackground } from "../ui/menuBackground";
import { backgroundLoseSprite } from "../resources";
import { Door } from "../doors/door";
import { StairsReset } from "../doors/contents/stairsReset";

export class LoseMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundLoseSprite);
    const door = new Door(StairsReset);
    door.setPos(engine.halfDrawWidth - 70, engine.halfDrawHeight - 30);

    engine.add(bg);
    engine.add(door);
  }
}
