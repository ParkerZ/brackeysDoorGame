import * as ex from "excalibur";
import { Level, LevelOptions } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { EscapeLadder } from "../../doorContents/items/escapeLadder";
import { Shield } from "../../doorContents/items/shield";
import { Key } from "../../doorContents/items/key";

export class Level5 extends Level {
  constructor(options?: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(Coin1),
      new Door(),
      new Door(Enemy1),
      // TODO: change to random
      new Door(EscapeLadder),
    ];
    super(doors, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
