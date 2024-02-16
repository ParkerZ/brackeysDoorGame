import * as ex from "excalibur";
import { Resources, heartSprite } from "../../../resources";
import { GetHealthPotionEvent } from "../../../events";
import { DoorContents } from "../doorContents";
import { HEAL_VOLUME } from "../../../constants";

export class HealthPotion extends DoorContents {
  constructor() {
    super(new GetHealthPotionEvent(), heartSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    Resources.sounds.heal.play(HEAL_VOLUME);
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
