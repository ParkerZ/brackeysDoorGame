import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetHealthPotionEvent } from "../../../events";
import { heartSprite } from "../../../resources";

export class ShopHealthPotion extends ShopItem {
  constructor(player: Player) {
    super(new GetHealthPotionEvent(), heartSprite, 2, player);
  }
}
