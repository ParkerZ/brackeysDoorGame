import * as ex from "excalibur";
import { spyglassSprite } from "../../../../resources";
import { SPYGLASS_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class SpyglassRelic extends DoorRelic {
  constructor() {
    super("spyglass", spyglassSprite, SPYGLASS_TOOLTIP);
  }
}
