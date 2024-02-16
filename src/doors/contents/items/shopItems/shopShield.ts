import * as ex from "excalibur";
import { Player } from "../../../../player";
import { ShopItem } from "./shopItem";
import { GetShieldEvent } from "../../../../events";
import { shieldSprite } from "../../../../resources";
import { SHIELD_TOOLTIP } from "../../../../constants";

export class ShopShield extends ShopItem {
  constructor(player: Player) {
    super(new GetShieldEvent(), shieldSprite, 2, player, SHIELD_TOOLTIP);
  }
}
