import * as ex from "excalibur";
import { MenuBackground } from "../ui/menuBackground";
import { backgroundWinSprite } from "../resources";
import { Door } from "../doors/door";
import { StairsReset } from "../doors/contents/stairsReset";

export class WinMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundWinSprite);
    const door = new Door(StairsReset);
    door.setPos(engine.halfDrawWidth + 12, engine.halfDrawHeight - 30);

    engine.add(bg);
    engine.add(door);
  }
}
