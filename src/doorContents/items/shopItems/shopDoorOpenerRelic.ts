import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetRelicEvent } from "../../../events";
import { doorOpenerSprite } from "../../../resources";
import { DisplayText } from "../../../ui/displayText";
import { DOOR_OPENER_TOOLTIP } from "../../../constants";

export class ShopDoorOpenerRelic extends ShopItem {
  protected tooltip: DisplayText;

  constructor(player: Player) {
    super(new GetRelicEvent("dooropener"), doorOpenerSprite, 5, player);
    this.tooltip = new DisplayText(0, 0, DOOR_OPENER_TOOLTIP);
  }
}
