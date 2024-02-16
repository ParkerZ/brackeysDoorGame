import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { Shield } from "../../doors/contents/items/shield";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doors/contents/items/healthPotion";
import { Enemy2 } from "../../doors/contents/enemy/enemy2";
import { ShopDoor } from "../../doors/contents/shopDoor";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doors/contents/items/coins/coin2";
import { DoorLocked } from "../../doors/doorLocked";

export class Level15 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(ShopDoor),
      new Door(Coin2),
      new Door(Enemy1),
      new Door(Enemy1),
      new Door(Enemy2),
      new DoorLocked(),
      new Door(selectRandom([Shield, Coin2])),
      new Door(selectRandom([HealthPotion, Coin2])),
      new Door(),
      new Door(),
    ];
    super(doors, 15, options);
  }
}
