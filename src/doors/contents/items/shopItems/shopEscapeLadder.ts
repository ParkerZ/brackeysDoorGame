import * as ex from "excalibur";
import { Player } from "../../../../player";
import { ShopItem } from "./shopItem";
import { GetEscapeLadderEvent } from "../../../../events";
import { ladderSprite } from "../../../../resources";
import { ESCAPE_LADDER_TOOLTIP } from "../../../../constants";

export class ShopEscapeLadder extends ShopItem {
  constructor(player: Player) {
    super(
      new GetEscapeLadderEvent(),
      ladderSprite,
      3,
      player,
      ESCAPE_LADDER_TOOLTIP
    );
  }
}
