import * as ex from "excalibur";
import { warHornSprite } from "../../../../resources";
import { DEATH_GRIP_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class DeathGripRelic extends DoorRelic {
  constructor() {
    super("deathgrip", warHornSprite, DEATH_GRIP_TOOLTIP);
  }
}
