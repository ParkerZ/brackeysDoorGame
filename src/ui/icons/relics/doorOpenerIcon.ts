import * as ex from "excalibur";
import { crowbarSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { DOOR_OPENER_TOOLTIP } from "../../../constants";

export class DoorOpenerIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, crowbarSprite, "dooropener", DOOR_OPENER_TOOLTIP);
  }
}
