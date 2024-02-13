import * as ex from "excalibur";
import { Level, LevelOptions } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Key } from "../../doorContents/items/key";
import { EscapeLadder } from "../../doorContents/items/escapeLadder";

export class Level3 extends Level {
  constructor(options?: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(Key),
      new Door(EscapeLadder),
    ];
    super(doors, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
