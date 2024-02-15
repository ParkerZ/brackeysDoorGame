import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetRelicEvent } from "../../../events";
import { spyglassSprite } from "../../../resources";
import { DisplayText } from "../../../ui/displayText";
import { SPYGLASS_TOOLTIP } from "../../../constants";

export class ShopSpyglassRelic extends ShopItem {
  protected tooltip: DisplayText;

  constructor(player: Player) {
    super(new GetRelicEvent("spyglass"), spyglassSprite, 6, player);
    this.tooltip = new DisplayText(0, 0, SPYGLASS_TOOLTIP);
  }
}
