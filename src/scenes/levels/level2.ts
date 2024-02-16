import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { LevelOptions } from "../gameScene";
import { DisplayText } from "../../ui/displayText";

export class Level2 extends Level {
  constructor(options: LevelOptions) {
    const doors = [new Door(StairsNextLevel), new Door(Coin1)];
    super(doors, 2, options);
  }

  onInitialize(engine: ex.Engine) {
    const text = new DisplayText(0, 0, "Some doors lead to gain...");
    text.setPos(engine.halfDrawWidth, engine.halfDrawHeight - 100);
    engine.add(text);

    super.onInitialize(engine);
  }
}
