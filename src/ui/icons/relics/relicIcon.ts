import * as ex from "excalibur";
import { UIIcon } from "../uiIcon";

export type Relic = "livingshield" | "dooropener";

export class RelicIcon extends UIIcon {
  private relic: Relic;
  constructor(
    x: number,
    y: number,
    sprite: ex.Sprite,
    relic: Relic,
    tooltip: string
  ) {
    super(x, y, sprite, tooltip);
    this.showValue = false;
    this.relic = relic;
  }

  public getRelic(): Relic {
    return this.relic;
  }
}
