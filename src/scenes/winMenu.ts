import * as ex from "excalibur";
import { MenuBackground } from "../menuBackground";
import { backgroundWinSprite } from "../resources";

export class WinMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundWinSprite);

    engine.add(bg);
  }
}
