import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { Shield } from "../../doors/contents/items/shield";
import { Key } from "../../doors/contents/items/key";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doors/contents/items/healthPotion";
import { EscapeLadder } from "../../doors/contents/items/escapeLadder";
import { Enemy2 } from "../../doors/contents/enemy/enemy2";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doors/contents/items/coins/coin2";

export class Level12 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(Coin2),
      new Door(selectRandom([Coin1, HealthPotion, Shield])),
      new Door(Enemy1),
      new Door(Enemy2),
      new Door(selectRandom([Shield, HealthPotion, Key, Coin1, EscapeLadder])),
      new Door(),
      new Door(),
    ];
    super(doors, 12, options);
  }
}
