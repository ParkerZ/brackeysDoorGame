import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetEscapeLadderEvent } from "../../../events";
import { ladderSprite } from "../../../resources";

export class ShopEscapeLadder extends ShopItem {
  constructor(player: Player) {
    super(GetEscapeLadderEvent, ladderSprite, 5, player);
  }
}
