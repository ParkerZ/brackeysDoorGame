import * as ex from "excalibur";
import { GetRelicEvent } from "../../../../events";
import { Relic } from "../../../../ui/icons/relics/relicIcon";
import { Player } from "../../../../player";
import { ShopItem } from "../shopItem";

export class ShopRelic extends ShopItem {
  protected relic: Relic;
  constructor(
    relic: Relic,
    sprite: ex.Sprite,
    cost: number,
    player: Player,
    tooltip: string
  ) {
    super(new GetRelicEvent(relic), sprite, cost, player, tooltip);

    this.relic = relic;
  }
}
