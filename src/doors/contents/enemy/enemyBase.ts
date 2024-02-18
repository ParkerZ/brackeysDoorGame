import * as ex from "excalibur";
import { DoorContents } from "../doorContents";
import { TakeDamageEvent } from "../../../events";

export class EnemyBase extends DoorContents {
  protected isOpenableByRelic = false;

  constructor(damage: number, sprite: ex.Graphic) {
    super(new TakeDamageEvent(damage), sprite);
  }

  onOpen(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
  }

  onEnter(_engine: ex.Engine): void {
    this.kill();
  }
}
