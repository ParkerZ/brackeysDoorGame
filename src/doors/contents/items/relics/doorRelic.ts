import * as ex from "excalibur";
import { DoorContents } from "../../doorContents";
import { Relic } from "../../../../ui/icons/relics/relicIcon";
import { GetRelicEvent } from "../../../../events";

export class DoorRelic extends DoorContents {
  protected relic: Relic;
  constructor(relic: Relic, sprite: ex.Sprite, tooltip: string) {
    super(new GetRelicEvent(relic), sprite, tooltip);

    this.relic = relic;
  }

  onOpen(_engine: ex.Engine): void {
    this.setIsTooltipEnabled(true);
  }
  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
