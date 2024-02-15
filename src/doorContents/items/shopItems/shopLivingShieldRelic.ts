import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetRelicEvent } from "../../../events";
import { livingShieldSprite } from "../../../resources";
import { LIVING_SHIELD_TOOLTIP } from "../../../constants";

export class ShopLivingShieldRelic extends ShopItem {
  constructor(player: Player) {
    super(
      new GetRelicEvent("livingshield"),
      livingShieldSprite,
      5,
      player,
      LIVING_SHIELD_TOOLTIP
    );
  }
}
