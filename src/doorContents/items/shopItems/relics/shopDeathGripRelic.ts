import * as ex from "excalibur";
import { Player } from "../../../../player";
import { boneFingerSprite } from "../../../../resources";
import { DEATH_GRIP_TOOLTIP } from "../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopDeathGripRelic extends ShopRelic {
  constructor(player: Player) {
    super("deathgrip", boneFingerSprite, 7, player, DEATH_GRIP_TOOLTIP);
  }
}
