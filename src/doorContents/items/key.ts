import * as ex from "excalibur";
import { keySprite } from "../../resources";
import { GetKeyEvent } from "../../events";
import { DoorContents } from "../doorContents";
import { DisplayText } from "../../ui/displayText";

export class Key extends DoorContents {
  protected tooltip: DisplayText;

  constructor() {
    super(GetKeyEvent, keySprite);

    this.tooltip = new DisplayText(
      0,
      0,
      "Rusty Key:\nAllows you to open 1 locked door."
    );
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
