import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";

export class Level1 extends Level {
  constructor() {
    super();
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
    console.log("1");

    const door = new Door(
      engine.halfDrawWidth,
      engine.halfDrawHeight,
      StairsNextLevel
    );
    engine.add(door);
  }
}
