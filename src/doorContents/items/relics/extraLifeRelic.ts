import * as ex from "excalibur";
import { extraLifeSprite } from "../../../resources";
import { EXTRA_LIFE_TOOLTIP } from "../../../constants";
import { DoorRelic } from "./doorRelic";

export class ExtraLifeRelic extends DoorRelic {
  constructor() {
    super("extralife", extraLifeSprite, EXTRA_LIFE_TOOLTIP);
  }
}
