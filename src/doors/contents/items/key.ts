import * as ex from "excalibur";
import { keySprite } from "../../../resources";
import { GetKeyEvent } from "../../../events";
import { DoorContents } from "../doorContents";
import { DisplayText } from "../../../ui/displayText";
import { KEY_TOOLTIP } from "../../../constants";

export class Key extends DoorContents {
  constructor() {
    super(new GetKeyEvent(), keySprite, KEY_TOOLTIP);
  }

  onOpen(_engine: ex.Engine): void {
    this.setIsTooltipEnabled(true);
  }

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
