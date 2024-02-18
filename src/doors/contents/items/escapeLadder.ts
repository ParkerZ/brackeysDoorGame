import * as ex from "excalibur";
import { ladderSprite } from "../../../resources";
import { GetEscapeLadderEvent } from "../../../events";
import { DoorContents } from "../doorContents";
import { ESCAPE_LADDER_TOOLTIP } from "../../../constants";

export class EscapeLadder extends DoorContents {
  constructor() {
    super(new GetEscapeLadderEvent(), ladderSprite, ESCAPE_LADDER_TOOLTIP);
  }

  onOpen(_engine: ex.Engine): void {
    this.setIsTooltipEnabled(true);
  }

  onEnter(engine: ex.Engine): void {
    this.setIsTooltipEnabled(false);
    engine.emit(this.event.type, this.event);
    this.setIsHovered(engine, false);
    this.kill();
  }
}
