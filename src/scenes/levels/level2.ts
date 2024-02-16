import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { LevelOptions } from "../gameScene";

export class Level2 extends Level {
  constructor(options: LevelOptions) {
    const doors = [new Door(StairsNextLevel), new Door(Coin1)];
    super(doors, 2, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
