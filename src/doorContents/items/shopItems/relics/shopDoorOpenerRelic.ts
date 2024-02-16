import * as ex from "excalibur";
import { Player } from "../../../../player";
import { doorOpenerSprite } from "../../../../resources";
import { DOOR_OPENER_TOOLTIP } from "../../../../constants";
import { ShopRelic } from "./shopRelic";

export class ShopDoorOpenerRelic extends ShopRelic {
  constructor(player: Player) {
    super("dooropener", doorOpenerSprite, 4, player, DOOR_OPENER_TOOLTIP);
  }
}
