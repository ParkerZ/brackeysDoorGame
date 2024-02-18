import * as ex from "excalibur";
import { candleSprite } from "../../../../resources";
import { SPYGLASS_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class SpyglassRelic extends DoorRelic {
  constructor() {
    super("spyglass", candleSprite, SPYGLASS_TOOLTIP);
  }
}
