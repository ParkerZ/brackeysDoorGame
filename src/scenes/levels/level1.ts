import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { LevelOptions } from "../gameScene";
import { DisplayText } from "../../ui/displayText";

export class Level1 extends Level {
  constructor(options: LevelOptions) {
    const doors = [new Door(StairsNextLevel)];

    super(doors, 1, options);
  }

  onInitialize(engine: ex.Engine) {
    const text = new DisplayText(0, 0, "Some doors lead to salvation...");
    text.setPos(engine.halfDrawWidth, engine.halfDrawHeight - 100);
    engine.add(text);

    super.onInitialize(engine);
  }
}
