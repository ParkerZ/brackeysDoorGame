import * as ex from "excalibur";
import { stairsSprite } from "../resources";
import { DoorContents } from "./doorContents";
import { LoadNextLevelEvent } from "../events";

export class StairsNextLevel extends DoorContents {
  constructor() {
    super(LoadNextLevelEvent, stairsSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    console.log("Enter stairs start");
    engine.emit(this.event.type);
  }
}
