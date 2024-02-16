import * as ex from "excalibur";
import { Resources, stairsSprite } from "../../resources";
import { DoorContents } from "./doorContents";
import { LoadNextLevelEvent } from "../../events";
import { STEPS_VOLUME } from "../../constants";

export class StairsNextLevel extends DoorContents {
  protected isOpenableByRelic = false;

  constructor() {
    super(new LoadNextLevelEvent(), stairsSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    Resources.sounds.steps.play(STEPS_VOLUME);
    setTimeout(() => {
      engine.emit(this.event.type);
    }, 100);
  }
}
