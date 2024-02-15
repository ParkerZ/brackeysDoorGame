import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetKeyEvent } from "../../../events";
import { keySprite } from "../../../resources";

export class ShopKey extends ShopItem {
  constructor(player: Player) {
    super(GetKeyEvent, keySprite, 4, player);
  }
}
