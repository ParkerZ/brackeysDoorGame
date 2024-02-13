import * as ex from "excalibur";
import { Level, LevelOptions } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";

export class Level4 extends Level {
  constructor(options?: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(Coin1),
      new Door(),
      new Door(Enemy1),
    ];
    super(doors, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
