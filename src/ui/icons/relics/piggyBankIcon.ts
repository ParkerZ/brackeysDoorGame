import * as ex from "excalibur";
import { piggyBankSprite } from "../../../resources";
import { RelicIcon } from "./relicIcon";
import { PIGGY_BANK_TOOLTIP } from "../../../constants";

export class PiggyBankIcon extends RelicIcon {
  constructor(x: number, y: number) {
    super(x, y, piggyBankSprite, "piggybank", PIGGY_BANK_TOOLTIP);
  }
}
