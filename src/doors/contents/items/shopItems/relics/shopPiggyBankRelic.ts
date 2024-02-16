import * as ex from "excalibur";
import { Player } from "../../../../../player";
import { piggyBankSprite } from "../../../../../resources";
import { PIGGY_BANK_TOOLTIP } from "../../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopPiggyBankRelic extends ShopRelic {
  constructor(player: Player) {
    super("piggybank", piggyBankSprite, 4, player, PIGGY_BANK_TOOLTIP);
  }
}
