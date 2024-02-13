import * as ex from "excalibur";
import { Level, LevelOptions } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { EscapeLadder } from "../../doorContents/items/escapeLadder";
import { Key } from "../../doorContents/items/key";

export class Level2 extends Level {
  constructor(options?: LevelOptions) {
    const doors = [new Door(StairsNextLevel), new Door(EscapeLadder)];
    super(doors, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
