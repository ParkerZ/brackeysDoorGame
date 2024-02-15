import * as ex from "excalibur";
import { spyglassSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { SPYGLASS_TOOLTIP } from "../../../constants";

export class SpyglassIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, spyglassSprite, "spyglass", SPYGLASS_TOOLTIP);
  }
}
