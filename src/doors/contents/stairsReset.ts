import * as ex from "excalibur";
import { Resources, stairsSprite } from "../../resources";
import { DoorContents } from "./doorContents";
import { LoadResetEvent } from "../../events";
import { STEPS_VOLUME } from "../../constants";

export class StairsReset extends DoorContents {
  protected isOpenableByRelic = false;
  protected isEntered = false;

  constructor() {
    super(new LoadResetEvent(), stairsSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    if (this.isEntered) return;

    this.isEntered = true;
    Resources.sounds.steps.play(STEPS_VOLUME);
    setTimeout(() => {
      engine.emit(this.event.type, this.event);
    }, 100);
  }
}
