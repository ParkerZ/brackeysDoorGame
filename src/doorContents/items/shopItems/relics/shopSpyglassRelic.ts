import * as ex from "excalibur";
import { Player } from "../../../../player";
import { spyglassSprite } from "../../../../resources";
import { SPYGLASS_TOOLTIP } from "../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopSpyglassRelic extends ShopRelic {
  constructor(player: Player) {
    super("spyglass", spyglassSprite, 6, player, SPYGLASS_TOOLTIP);
  }
}
