import * as ex from "excalibur";
import { coinSprite } from "../../../resources";
import { UIIcon } from "../uiIcon";

export class CoinIcon extends UIIcon {
  constructor(x: number, y: number) {
    super(x, y, coinSprite);
  }
}
