import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { selectRandom } from "../../util";
import { Enemy2 } from "../../doors/contents/enemy/enemy2";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doors/contents/items/coins/coin2";

export class Level14 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(Coin2),
      new Door(Coin1),
      new Door(Enemy1),
      new Door(Enemy1),
      new Door(selectRandom([Enemy1, Enemy2])),
      new Door(selectRandom([Coin1, Coin2])),
      new Door(Coin1),
      new Door(),
    ];
    super(doors, 14, options);
  }
}
