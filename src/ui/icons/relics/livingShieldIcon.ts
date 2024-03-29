import * as ex from "excalibur";
import { helmSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { LIVING_SHIELD_TOOLTIP } from "../../../constants";

export class LivingShieldIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, helmSprite, "livingshield", LIVING_SHIELD_TOOLTIP);
  }
}
