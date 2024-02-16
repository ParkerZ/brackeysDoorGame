import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Key } from "../../doorContents/items/key";
import { selectRandom } from "../../util";
import { EscapeLadder } from "../../doorContents/items/escapeLadder";
import { ShopDoor } from "../../doorContents/shopDoor";
import { LevelOptions } from "../gameScene";

export class Level7 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(ShopDoor),
      new Door(Coin1),
      new Door(Enemy1),
      new Door(selectRandom([EscapeLadder])),
      new Door(),
    ];
    super(doors, 7, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
