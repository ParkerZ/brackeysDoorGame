import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetRelicEvent } from "../../../events";
import { boneFingerSprite } from "../../../resources";
import { DisplayText } from "../../../ui/displayText";
import { DEATH_GRIP_TOOLTIP } from "../../../constants";

export class ShopDeathGripRelic extends ShopItem {
  protected tooltip: DisplayText;

  constructor(player: Player) {
    super(new GetRelicEvent("deathgrip"), boneFingerSprite, 7, player);
    this.tooltip = new DisplayText(0, 0, DEATH_GRIP_TOOLTIP);
  }
}
