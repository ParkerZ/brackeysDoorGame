import * as ex from "excalibur";
import { Player } from "../../../../../player";
import { candleSprite } from "../../../../../resources";
import { SPYGLASS_TOOLTIP } from "../../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopSpyglassRelic extends ShopRelic {
  constructor(player: Player) {
    super("spyglass", candleSprite, 5, player, SPYGLASS_TOOLTIP);
  }
}
