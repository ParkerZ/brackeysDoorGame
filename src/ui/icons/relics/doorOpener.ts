import * as ex from "excalibur";
import { doorOpenerSprite, livingShieldSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";

export class DoorOpenerIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, doorOpenerSprite, "dooropener");
  }
}
