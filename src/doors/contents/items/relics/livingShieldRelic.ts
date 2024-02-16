import * as ex from "excalibur";
import { livingShieldSprite } from "../../../../resources";
import { LIVING_SHIELD_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class LivingShieldRelic extends DoorRelic {
  constructor() {
    super("livingshield", livingShieldSprite, LIVING_SHIELD_TOOLTIP);
  }
}
