import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Key } from "../../doorContents/items/key";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doorContents/items/healthPotion";
import { LevelOptions } from "../gameScene";
import { Shield } from "../../doorContents/items/shield";

export class Level8 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(Coin1),
      new Door(Enemy1),
      new Door(selectRandom([HealthPotion, Coin1])),
      new Door(selectRandom([Key])),
      new Door(),
    ];
    super(doors, 8, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
