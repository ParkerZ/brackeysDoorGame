import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Shield } from "../../doorContents/items/shield";
import { Key } from "../../doorContents/items/key";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doorContents/items/healthPotion";
import { Enemy2 } from "../../doorContents/enemy/enemy2";
import { ShopDoor } from "../../doorContents/shopDoor";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doorContents/items/coin/coin2";

export class Level16 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(ShopDoor),
      new Door(Enemy1),
      new Door(Enemy1),
      new Door(Enemy2),
      new Door(selectRandom([Shield, Coin2])),
      new Door(selectRandom([HealthPotion, Coin2])),
      new Door(selectRandom([Shield, HealthPotion, Key, Coin2])),
      new Door(),
      new Door(),
      new Door(),
    ];
    super(doors, 16, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
