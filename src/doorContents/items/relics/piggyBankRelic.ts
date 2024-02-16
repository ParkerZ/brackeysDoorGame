import * as ex from "excalibur";
import { piggyBankSprite } from "../../../resources";
import { PIGGY_BANK_TOOLTIP } from "../../../constants";
import { DoorRelic } from "./doorRelic";

export class PiggyBankRelic extends DoorRelic {
  constructor() {
    super("piggybank", piggyBankSprite, PIGGY_BANK_TOOLTIP);
  }
}
