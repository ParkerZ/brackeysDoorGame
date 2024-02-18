import * as ex from "excalibur";
import { Player } from "../../../../../player";
import { warHornSprite } from "../../../../../resources";
import { DEATH_GRIP_TOOLTIP } from "../../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopDeathGripRelic extends ShopRelic {
  constructor(player: Player) {
    super("deathgrip", warHornSprite, 6, player, DEATH_GRIP_TOOLTIP);
  }
}
