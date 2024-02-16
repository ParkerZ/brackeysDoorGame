import * as ex from "excalibur";
import { metalDetectorSprite } from "../../../resources";
import { UIIcon } from "../uiIcon";
import { UseMetalDetectorEvent } from "../../../events";
import { METAL_DETECTOR_TOOLTIP } from "../../../constants";

export class MetalDetectorButton extends UIIcon {
  private event = new UseMetalDetectorEvent();

  constructor(x: number, y: number) {
    super(x, y, metalDetectorSprite, METAL_DETECTOR_TOOLTIP);
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    this.on("pointerdown", () => {
      engine.emit(this.event.type, this.event);
      this.setValue(this.value - 1);
    });
  }
}
