import * as ex from "excalibur";
import { Level, LevelOptions } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Shield } from "../../doorContents/items/shield";
import { Key } from "../../doorContents/items/key";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doorContents/items/healthPotion";
import { EscapeLadder } from "../../doorContents/items/escapeLadder";

export class Level9 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(selectRandom([Shield, HealthPotion, Coin1])),
      new Door(),
      new Door(Enemy1),
      new Door(Enemy1),
      new Door(
        selectRandom([
          Shield,
          HealthPotion,
          Key,
          Coin1,
          EscapeLadder,
          Enemy1,
          undefined,
        ])
      ),
    ];
    super(doors, 9, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}