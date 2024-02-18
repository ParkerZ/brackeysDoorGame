import { enemy1Animation } from "../../../resources";
import { EnemyBase } from "./enemyBase";

export class Enemy1 extends EnemyBase {
  constructor() {
    super(1, enemy1Animation);
  }
}
