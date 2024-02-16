import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { selectRandom } from "../../util";
import { ShopDoor } from "../../doorContents/shopDoor";
import { LevelOptions } from "../gameScene";
import { DoorLocked } from "../../doorLocked";
import {
  DoorContents,
  InstantiableDoorContents,
} from "../../doorContents/doorContents";

export class Level9 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(ShopDoor),
      new Door(Coin1),
      new Door(Enemy1),
      new Door(Enemy1),
      new DoorLocked(),
      new Door(),
    ];
    super(doors, 9, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
