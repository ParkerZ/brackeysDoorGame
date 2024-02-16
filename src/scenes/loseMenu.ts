import * as ex from "excalibur";
import { MenuBackground } from "../ui/menuBackground";
import { backgroundLoseSprite } from "../resources";

export class LoseMenu extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundLoseSprite);

    engine.add(bg);
  }
}
