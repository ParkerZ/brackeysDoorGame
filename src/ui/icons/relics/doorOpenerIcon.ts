import * as ex from "excalibur";
import { doorOpenerSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { DOOR_OPENER_TOOLTIP } from "../../../constants";

export class DoorOpenerIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, doorOpenerSprite, "dooropener", DOOR_OPENER_TOOLTIP);
  }
}
