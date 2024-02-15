import * as ex from "excalibur";
import { keySprite } from "../../../resources";
import { UIIcon } from "../uiIcon";
import { KEY_TOOLTIP } from "../../../constants";

export class KeyIcon extends UIIcon {
  constructor(x: number, y: number) {
    super(x, y, keySprite, KEY_TOOLTIP);
  }
}
