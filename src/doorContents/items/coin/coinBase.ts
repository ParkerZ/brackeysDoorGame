import * as ex from "excalibur";
import { coinSprite } from "../../../resources";
import { AddCoinsEvent } from "../../../events";
import { DoorContents } from "../../doorContents";

export class CoinBase extends DoorContents {
  constructor(numCoins: number) {
    super(AddCoinsEvent, coinSprite, numCoins);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
