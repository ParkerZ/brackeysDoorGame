import * as ex from "excalibur";
import { warHornSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { DEATH_GRIP_TOOLTIP } from "../../../constants";

export class DeathGripIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, warHornSprite, "deathgrip", DEATH_GRIP_TOOLTIP);
  }
}
