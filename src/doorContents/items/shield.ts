import * as ex from "excalibur";
import { shieldSprite } from "../../resources";
import { GetShieldEvent } from "../../events";
import { DoorContents } from "../doorContents";
import { DisplayText } from "../../ui/displayText";

export class Shield extends DoorContents {
  protected tooltip: DisplayText;

  constructor() {
    super(GetShieldEvent, shieldSprite);

    this.tooltip = new DisplayText(0, 0, "Shield:\nBlocks all of next attack.");
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.remove(this.tooltip);
    engine.emit(this.event.type, this.event);
    this.kill();
  }

  onInitialize(engine: ex.Engine<any>): void {
    super.onInitialize(engine);

    this.on("pointerenter", () => {
      engine.add(this.tooltip);
    });

    this.on("pointerleave", () => {
      engine.remove(this.tooltip);
    });
  }

  public setPos(x: number, y: number) {
    super.setPos(x, y);
    this.tooltip.setPos(x, y);
  }
}
