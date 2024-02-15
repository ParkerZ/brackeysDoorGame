import * as ex from "excalibur";
import { livingShieldSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { GetShieldEvent } from "../../../events";

export class LivingShieldIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, livingShieldSprite, "livingshield");
  }
}
