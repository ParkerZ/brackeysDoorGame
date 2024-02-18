import * as ex from "excalibur";
import { skeletonKeySprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { LOCK_PICK_TOOLTIP } from "../../../constants";

export class LockPickIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, skeletonKeySprite, "lockpick", LOCK_PICK_TOOLTIP);
  }
}
