import * as ex from "excalibur";
import { enemySprite } from "../../resources";
import { DoorContents } from "../doorContents";
import { TakeDamageEvent } from "../../events";

export class EnemyBase extends DoorContents {
  constructor(damage: number) {
    super(TakeDamageEvent, enemySprite, damage);
  }

  onOpen(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
  }

  onEnter(_engine: ex.Engine): void {
    this.kill();
  }
}
