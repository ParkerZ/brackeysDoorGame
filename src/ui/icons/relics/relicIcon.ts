import * as ex from "excalibur";
import { UIIcon } from "../uiIcon";

export type Relic = "livingshield" | "dooropener";

export class RelicIcon extends UIIcon {
  private relic: Relic;
  constructor(x: number, y: number, sprite: ex.Sprite, relic: Relic) {
    super(x, y, sprite);
    this.showValue = false;
    this.relic = relic;
  }

  public getRelic(): Relic {
    return this.relic;
  }
}
