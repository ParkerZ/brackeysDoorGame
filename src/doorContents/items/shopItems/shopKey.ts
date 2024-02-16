import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetKeyEvent } from "../../../events";
import { keySprite } from "../../../resources";
import { KEY_TOOLTIP } from "../../../constants";

export class ShopKey extends ShopItem {
  constructor(player: Player) {
    super(new GetKeyEvent(), keySprite, 2, player, KEY_TOOLTIP);
  }
}
