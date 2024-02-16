import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { Key } from "../../doors/contents/items/key";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doors/contents/items/healthPotion";
import { LevelOptions } from "../gameScene";

export class Level8 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(Coin1),
      new Door(Enemy1),
      new Door(selectRandom([HealthPotion, Coin1])),
      new Door(selectRandom([Key])),
      new Door(),
    ];
    super(doors, 8, options);
  }
}
