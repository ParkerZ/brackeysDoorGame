import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Shield } from "../../doorContents/items/shield";
import { Key } from "../../doorContents/items/key";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doorContents/items/healthPotion";
import { EscapeLadder } from "../../doorContents/items/escapeLadder";
import { Enemy2 } from "../../doorContents/enemy/enemy2";
import { ShopDoor } from "../../doorContents/shopDoor";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doorContents/items/coin/coin2";
import { DoorLocked } from "../../doorLocked";

export class Level15 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(ShopDoor),
      new Door(selectRandom([Shield, Coin2])),
      new Door(selectRandom([HealthPotion, Coin2])),
      new Door(Enemy1),
      new Door(Enemy1),
      new Door(Enemy2),
      new DoorLocked(),
      new Door(),
      new Door(),
    ];
    super(doors, 15, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
