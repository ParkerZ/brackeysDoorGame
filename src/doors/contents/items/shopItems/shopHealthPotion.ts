import * as ex from "excalibur";
import { Player } from "../../../../player";
import { ShopItem } from "./shopItem";
import { GetHealthPotionEvent } from "../../../../events";
import { Resources, heartSprite } from "../../../../resources";
import { HEAL_VOLUME } from "../../../../constants";

export class ShopHealthPotion extends ShopItem {
  constructor(player: Player) {
    super(new GetHealthPotionEvent(), heartSprite, 1, player);
  }

  onBuy(engine: ex.Engine) {
    Resources.sounds.heal.play(HEAL_VOLUME);
    super.onBuy(engine);
  }
}
