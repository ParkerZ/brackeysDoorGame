import * as ex from "excalibur";
import { AddCoinsEvent } from "../../../events";
import { DoorContents } from "../../doorContents";

export class CoinBase extends DoorContents {
  constructor(numCoins: number, sprite: ex.Sprite) {
    super(new AddCoinsEvent(numCoins), sprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    engine.emit(this.event.type, this.event);
    this.kill();
  }
}
