import { enemy2Animation } from "../../../resources";
import { EnemyBase } from "./enemyBase";

export class Enemy2 extends EnemyBase {
  constructor() {
    super(2, enemy2Animation);
  }
}
