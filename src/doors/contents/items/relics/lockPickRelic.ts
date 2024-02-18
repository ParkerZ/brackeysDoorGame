import * as ex from "excalibur";
import { skeletonKeySprite } from "../../../../resources";
import { LOCK_PICK_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class LockPickRelic extends DoorRelic {
  constructor() {
    super("lockpick", skeletonKeySprite, LOCK_PICK_TOOLTIP);
  }
}
