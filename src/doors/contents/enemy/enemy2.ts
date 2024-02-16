import { enemySprite } from "../../../resources";
import { EnemyBase } from "./enemyBase";

export class Enemy2 extends EnemyBase {
  constructor() {
    super(2, enemySprite);
  }
}
