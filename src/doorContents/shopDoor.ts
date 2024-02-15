import * as ex from "excalibur";
import { shopSprite } from "../resources";
import { DoorContents } from "./doorContents";
import { LoadShopEvent } from "../events";

export class ShopDoor extends DoorContents {
  constructor() {
    super(new LoadShopEvent(), shopSprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type);
  }
}
