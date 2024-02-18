import * as ex from "excalibur";
import { helmSprite } from "../../../../resources";
import { LIVING_SHIELD_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class LivingShieldRelic extends DoorRelic {
  constructor() {
    super("livingshield", helmSprite, LIVING_SHIELD_TOOLTIP);
  }
}
