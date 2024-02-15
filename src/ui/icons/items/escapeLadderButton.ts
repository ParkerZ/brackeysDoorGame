import * as ex from "excalibur";
import { ladderSprite } from "../../../resources";
import { UIIcon } from "../uiIcon";
import { UseEscapeLadderEvent } from "../../../events";
import { ESCAPE_LADDER_TOOLTIP } from "../../../constants";

export class EscapeLadderButton extends UIIcon {
  private event = new UseEscapeLadderEvent();

  constructor(x: number, y: number) {
    super(x, y, ladderSprite, ESCAPE_LADDER_TOOLTIP);
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    this.on("pointerdown", () => {
      engine.emit(this.event.type, this.event);
      this.setValue(this.value - 1);
    });
  }
}
