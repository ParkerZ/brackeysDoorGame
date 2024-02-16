import * as ex from "excalibur";
import { Player } from "../../../../player";
import { extraLifeSprite } from "../../../../resources";
import { EXTRA_LIFE_TOOLTIP } from "../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopExtraLifeRelic extends ShopRelic {
  constructor(player: Player) {
    super("extralife", extraLifeSprite, 5, player, EXTRA_LIFE_TOOLTIP);
  }
}
