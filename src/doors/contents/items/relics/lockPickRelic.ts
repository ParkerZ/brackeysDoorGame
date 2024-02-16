import * as ex from "excalibur";
import { lockPickSprite } from "../../../../resources";
import { LOCK_PICK_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class LockPickRelic extends DoorRelic {
  constructor() {
    super("lockpick", lockPickSprite, LOCK_PICK_TOOLTIP);
  }
}
