import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { selectRandom } from "../../util";
import { EscapeLadder } from "../../doors/contents/items/escapeLadder";
import { ShopDoor } from "../../doors/contents/shopDoor";
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
}
