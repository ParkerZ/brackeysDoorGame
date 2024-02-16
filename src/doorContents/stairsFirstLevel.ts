import * as ex from "excalibur";
import { Resources, stairsSprite } from "../resources";
import { DoorContents } from "./doorContents";
import { LoadNextLevelEvent } from "../events";
import { SOUNDTRACK_VOLUME } from "../constants";

export class StairsFistLevel extends DoorContents {
  protected isOpenableByRelic = false;

  constructor() {
    super(new LoadNextLevelEvent(), stairsSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type);
  }
}
