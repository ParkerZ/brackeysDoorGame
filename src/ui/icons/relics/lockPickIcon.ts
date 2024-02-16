import * as ex from "excalibur";
import { lockPickSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { LOCK_PICK_TOOLTIP } from "../../../constants";

export class LockPickIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, lockPickSprite, "lockpick", LOCK_PICK_TOOLTIP);
  }
}
