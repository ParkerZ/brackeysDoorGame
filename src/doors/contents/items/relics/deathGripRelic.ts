import * as ex from "excalibur";
import { boneFingerSprite } from "../../../../resources";
import { DEATH_GRIP_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class DeathGripRelic extends DoorRelic {
  constructor() {
    super("deathgrip", boneFingerSprite, DEATH_GRIP_TOOLTIP);
  }
}
