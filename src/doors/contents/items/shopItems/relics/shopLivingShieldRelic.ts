import * as ex from "excalibur";
import { Player } from "../../../../../player";
import { helmSprite } from "../../../../../resources";
import { LIVING_SHIELD_TOOLTIP } from "../../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopLivingShieldRelic extends ShopRelic {
  constructor(player: Player) {
    super("livingshield", helmSprite, 5, player, LIVING_SHIELD_TOOLTIP);
  }
}
