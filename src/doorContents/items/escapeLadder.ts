import * as ex from "excalibur";
import { ladderSprite } from "../../resources";
import { GetEscapeLadderEvent } from "../../events";
import { DoorContents } from "../doorContents";
import { DisplayText } from "../../ui/displayText";

export class EscapeLadder extends DoorContents {
  // TODO: bring tooltip stuff into DoorContents
  protected tooltip: DisplayText;

  constructor() {
    super(GetEscapeLadderEvent, ladderSprite);

    this.tooltip = new DisplayText(
      0,
      0,
      "Escape Ladder:\nUse to ascend a floor."
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
