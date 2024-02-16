import * as ex from "excalibur";
import { DOOR_WIDTH } from "../constants";
import { GameEvent } from "../events";
import { DisplayText } from "../ui/displayText";

export abstract class DoorContents extends ex.ScreenElement {
  private sprite;
  protected event: GameEvent;
  protected isOpenableByRelic = true;
  protected tooltip: DisplayText | undefined;
  protected isTooltipEnabled = false;

  constructor(event: GameEvent, sprite: ex.Sprite, tooltip?: string) {
    super({
      collider: ex.Shape.Box(DOOR_WIDTH, DOOR_WIDTH, ex.Vector.Half),
    });

    this.sprite = sprite;
    this.event = event;

    if (tooltip) {
      this.tooltip = new DisplayText(0, 0, tooltip);
    }
  }

  onInitialize(engine: ex.Engine): void {
    this.graphics.use(this.sprite);

    this.on("pointerenter", () => {
      if (this.tooltip && this.isTooltipEnabled) engine.add(this.tooltip);
    });

    this.on("pointerleave", () => {
      if (this.tooltip && this.isTooltipEnabled) engine.remove(this.tooltip);
    });

    this.on("kill", () => {
      if (this.tooltip && this.isTooltipEnabled) engine.remove(this.tooltip);
    });
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x - DOOR_WIDTH / 2, y - DOOR_WIDTH / 2);
    if (this.tooltip) this.tooltip.setPos(x, y);
  }

  public getIsOpenableByRelic(): boolean {
    return this.isOpenableByRelic;
  }

  public setIsTooltipEnabled(value: boolean): void {
    if (!this.tooltip) {
      return;
    }
    this.isTooltipEnabled = value;
  }

  abstract onOpen(engine: ex.Engine): void;
  abstract onEnter(engine: ex.Engine): void;
}

export type InstantiableDoorContents<T extends DoorContents> = {
  new (): T;
};
