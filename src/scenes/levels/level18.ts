import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { Shield } from "../../doors/contents/items/shield";
import { HealthPotion } from "../../doors/contents/items/healthPotion";
import { Enemy2 } from "../../doors/contents/enemy/enemy2";
import { ShopDoor } from "../../doors/contents/shopDoor";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doors/contents/items/coins/coin2";
import { DoorLocked } from "../../doors/doorLocked";

export class Level18 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(ShopDoor),
      new Door(Shield),
      new Door(HealthPotion),
      new Door(Coin2),
      new Door(Enemy1),
      new Door(Enemy2),
      new Door(Enemy2),
      new DoorLocked(),
      new Door(),
      new Door(),
      new Door(),
    ];
    super(doors, 18, options);
  }
}
