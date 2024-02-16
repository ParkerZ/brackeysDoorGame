import * as ex from "excalibur";
import { extraLifeSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { EXTRA_LIFE_TOOLTIP } from "../../../constants";

export class ExtraLifeIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, extraLifeSprite, "extralife", EXTRA_LIFE_TOOLTIP);
  }
}
