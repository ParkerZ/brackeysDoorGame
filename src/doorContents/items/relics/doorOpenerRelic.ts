import * as ex from "excalibur";
import { doorOpenerSprite } from "../../../resources";
import { DOOR_OPENER_TOOLTIP } from "../../../constants";
import { DoorRelic } from "./doorRelic";

export class DoorOpenerRelic extends DoorRelic {
  constructor() {
    super("dooropener", doorOpenerSprite, DOOR_OPENER_TOOLTIP);
  }
}
