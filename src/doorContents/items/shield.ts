import * as ex from "excalibur";
import { shieldSprite } from "../../resources";
import { GetShieldEvent } from "../../events";
import { DoorContents } from "../doorContents";
import { SHIELD_TOOLTIP } from "../../constants";

export class Shield extends DoorContents {
  constructor() {
    super(new GetShieldEvent(), shieldSprite, SHIELD_TOOLTIP);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
