import * as ex from "excalibur";
import { crowbarSprite } from "../../../../resources";
import { DOOR_OPENER_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class DoorOpenerRelic extends DoorRelic {
  constructor() {
    super("dooropener", crowbarSprite, DOOR_OPENER_TOOLTIP);
  }
}
