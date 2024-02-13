import * as ex from "excalibur";
import { keySprite } from "../../resources";
import { GetKeyEvent } from "../../events";
import { DoorContents } from "../doorContents";

export class Key extends DoorContents {
  constructor() {
    super(GetKeyEvent, keySprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
