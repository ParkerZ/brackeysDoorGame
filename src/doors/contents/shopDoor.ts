import * as ex from "excalibur";
import { shopSprite } from "../../resources";
import { DoorContents } from "./doorContents";
import { LoadShopEvent } from "../../events";
import { SHOP_TOOLTIP } from "../../constants";

export class ShopDoor extends DoorContents {
  constructor() {
    super(new LoadShopEvent(), shopSprite, SHOP_TOOLTIP);
  }

  onOpen(_engine: ex.Engine): void {
    this.setIsTooltipEnabled(true);
  }

  onEnter(engine: ex.Engine): void {
    this.setIsTooltipEnabled(false);
    engine.emit(this.event.type);
    this.setIsHovered(engine, false);
    this.kill();
  }
}
