import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { Shield } from "../../doors/contents/items/shield";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doors/contents/items/healthPotion";
import { Enemy2 } from "../../doors/contents/enemy/enemy2";
import { LevelOptions } from "../gameScene";

export class Level20 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(StairsNextLevel),
      new Door(Shield),
      new Door(Shield),
      new Door(HealthPotion),
      new Door(HealthPotion),
      new Door(Enemy1),
      new Door(Enemy2),
      new Door(Enemy2),
      new Door(Enemy2),
      new Door(selectRandom([Shield, HealthPotion])),
      new Door(),
      new Door(),
      new Door(),
    ];
    super(doors, 20, options);
  }
}
