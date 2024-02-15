import * as ex from "excalibur";
import { heartSprite } from "../../resources";
import { GetHealthPotionEvent } from "../../events";
import { DoorContents } from "../doorContents";

export class HealthPotion extends DoorContents {
  constructor() {
    super(new GetHealthPotionEvent(), heartSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
