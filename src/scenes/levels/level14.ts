import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { selectRandom } from "../../util";
import { Enemy2 } from "../../doorContents/enemy/enemy2";
import { LevelOptions } from "../gameScene";
import { Coin2 } from "../../doorContents/items/coin/coin2";

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

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
