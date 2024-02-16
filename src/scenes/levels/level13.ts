import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Shield } from "../../doorContents/items/shield";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doorContents/items/healthPotion";
import { ShopDoor } from "../../doorContents/shopDoor";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doorContents/items/coin/coin2";
import { DoorLocked } from "../../doorLocked";
import { MetalDetector } from "../../doorContents/items/metalDetector";
import { Key } from "../../doorContents/items/key";

export class Level13 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(ShopDoor),
      new Door(Coin2),
      new Door(Enemy1),
      new Door(Enemy1),
      new Door(Enemy1),
      new DoorLocked(MetalDetector),
      new Door(selectRandom([Shield, HealthPotion, Coin1])),
      new Door(),
      new Door(),
    ];
    super(doors, 13, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
