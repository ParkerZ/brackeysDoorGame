import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Shield } from "../../doorContents/items/shield";
import { Key } from "../../doorContents/items/key";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doorContents/items/healthPotion";
import { EscapeLadder } from "../../doorContents/items/escapeLadder";
import { Enemy2 } from "../../doorContents/enemy/enemy2";
import { LevelOptions } from "../gameScene";

export class Level20 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(Shield),
      new Door(Shield),
      new Door(HealthPotion),
      new Door(HealthPotion),
      new Door(Enemy1),
      new Door(Enemy2),
      new Door(Enemy2),
      new Door(Enemy2),
      new Door(selectRandom([Shield, HealthPotion])),
      new Door(),
      new Door(),
      new Door(),
    ];
    super(doors, 20, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
