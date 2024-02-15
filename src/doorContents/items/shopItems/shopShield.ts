import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetShieldEvent } from "../../../events";
import { shieldSprite } from "../../../resources";

export class ShopShield extends ShopItem {
  constructor(player: Player) {
    super(GetShieldEvent, shieldSprite, 3, player);
  }
}
