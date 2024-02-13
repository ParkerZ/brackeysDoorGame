import * as ex from "excalibur";
import { shieldSprite } from "../../resources";
import { GetShieldEvent } from "../../events";
import { DoorContents } from "../doorContents";

export class Shield extends DoorContents {
  constructor() {
    super(GetShieldEvent, shieldSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
