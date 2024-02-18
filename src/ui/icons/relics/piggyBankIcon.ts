import * as ex from "excalibur";
import { chestSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { PIGGY_BANK_TOOLTIP } from "../../../constants";

export class PiggyBankIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, chestSprite, "piggybank", PIGGY_BANK_TOOLTIP);
  }
}
