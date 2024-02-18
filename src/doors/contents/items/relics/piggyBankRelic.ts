import * as ex from "excalibur";
import { chestSprite } from "../../../../resources";
import { PIGGY_BANK_TOOLTIP } from "../../../../constants";
import { DoorRelic } from "./doorRelic";

export class PiggyBankRelic extends DoorRelic {
  constructor() {
    super("piggybank", chestSprite, PIGGY_BANK_TOOLTIP);
  }
}
