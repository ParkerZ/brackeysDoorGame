import * as ex from "excalibur";
import { HealthPotion } from "../healthPotion";
import { BuyItemEvent } from "../../../events";

export class ShopHealthPotion extends HealthPotion {
  private isDisabled = false;
  private cost = 2;

  constructor() {
    super();
  }

  onEnter(engine: ex.Engine): void {
    if (this.isDisabled) return;

    const buyEvent = new BuyItemEvent(this.cost);
    const useEvent = this.event;
    engine.emit(buyEvent.type, buyEvent);
    engine.emit(useEvent.type, useEvent);
    this.kill();
  }
}
