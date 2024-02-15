import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetRelicEvent } from "../../../events";
import { livingShieldSprite } from "../../../resources";
import { DisplayText } from "../../../ui/displayText";

export class ShopLivingShieldRelic extends ShopItem {
  protected tooltip: DisplayText;

  constructor(player: Player) {
    super(GetRelicEvent, livingShieldSprite, 5, player, "livingshield");
    this.tooltip = new DisplayText(
      0,
      0,
      "Stair Shield:\nGrants 1 shield each time you ascend a floor."
    );
  }

  onInitialize(engine: ex.Engine<any>): void {
    super.onInitialize(engine);

    this.on("pointerenter", () => {
      engine.add(this.tooltip);
    });

    this.on("pointerleave", () => {
      engine.remove(this.tooltip);
    });
  }

  public setPos(x: number, y: number) {
    super.setPos(x, y);
    this.tooltip.setPos(x, y);
  }

  onBuy(engine: ex.Engine) {
    engine.remove(this.tooltip);
    super.onBuy(engine);
  }
}
