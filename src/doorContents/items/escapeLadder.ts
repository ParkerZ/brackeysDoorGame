import * as ex from "excalibur";
import { ladderSprite } from "../../resources";
import { GetEscapeLadderEvent } from "../../events";
import { DoorContents } from "../doorContents";

export class EscapeLadder extends DoorContents {
  constructor() {
    super(GetEscapeLadderEvent, ladderSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
