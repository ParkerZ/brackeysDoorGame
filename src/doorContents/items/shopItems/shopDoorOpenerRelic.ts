import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetRelicEvent } from "../../../events";
import { doorOpenerSprite } from "../../../resources";
import { DisplayText } from "../../../ui/displayText";

export class ShopDoorOpenerRelic extends ShopItem {
  protected tooltip: DisplayText;

  constructor(player: Player) {
    super(GetRelicEvent, doorOpenerSprite, 5, player, "dooropener");
    this.tooltip = new DisplayText(
      0,
      0,
      "Crowbar:\nOpens 1 random door every time you ascend a floor."
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
