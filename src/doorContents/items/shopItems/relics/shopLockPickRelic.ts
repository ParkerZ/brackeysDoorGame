import * as ex from "excalibur";
import { Player } from "../../../../player";
import { lockPickSprite } from "../../../../resources";
import { LOCK_PICK_TOOLTIP } from "../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopLockPickRelic extends ShopRelic {
  constructor(player: Player) {
    super("lockpick", lockPickSprite, 7, player, LOCK_PICK_TOOLTIP);
  }
}
