import * as ex from "excalibur";
import { Level, LevelOptions } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { LoadFirstLevelEvent } from "../../events";

export class Level1 extends Level {
  constructor(options?: LevelOptions) {
    const doors = [new Door(StairsNextLevel)];

    super(doors, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
    const event = new LoadFirstLevelEvent();
    engine.emit(event.type, event);
  }
}
