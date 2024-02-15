import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetRelicEvent } from "../../../events";
import { piggyBankSprite } from "../../../resources";
import { DisplayText } from "../../../ui/displayText";
import { PIGGY_BANK_TOOLTIP } from "../../../constants";

export class ShopPiggyBankRelic extends ShopItem {
  protected tooltip: DisplayText;

  constructor(player: Player) {
    super(new GetRelicEvent("piggybank"), piggyBankSprite, 2, player);
    this.tooltip = new DisplayText(0, 0, PIGGY_BANK_TOOLTIP);
  }
}
