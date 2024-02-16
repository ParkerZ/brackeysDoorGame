import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { Shield } from "../../doors/contents/items/shield";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doors/contents/items/healthPotion";
import { ShopDoor } from "../../doors/contents/shopDoor";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doors/contents/items/coins/coin2";
import { DoorLocked } from "../../doors/doorLocked";
import { MetalDetector } from "../../doors/contents/items/metalDetector";
import { Key } from "../../doors/contents/items/key";

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
}
