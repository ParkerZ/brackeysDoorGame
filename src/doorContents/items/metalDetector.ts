import * as ex from "excalibur";
import { metalDetectorSprite } from "../../resources";
import { GetMetalDetectorEvent } from "../../events";
import { DoorContents } from "../doorContents";
import { METAL_DETECTOR_TOOLTIP } from "../../constants";

export class MetalDetector extends DoorContents {
  constructor() {
    super(
      new GetMetalDetectorEvent(),
      metalDetectorSprite,
      METAL_DETECTOR_TOOLTIP
    );
  }

  onOpen(_engine: ex.Engine): void {
    this.setIsTooltipEnabled(true);
  }

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
