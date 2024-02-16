import * as ex from "excalibur";
import { AddCoinsEvent } from "../../../../events";
import { DoorContents } from "../../doorContents";
import { Resources } from "../../../../resources";
import { selectRandom } from "../../../../util";
import { COIN_VOLUME } from "../../../../constants";

export class CoinBase extends DoorContents {
  constructor(numCoins: number, sprite: ex.Sprite) {
    super(new AddCoinsEvent(numCoins), sprite);
  }

  onOpen(_engine: ex.Engine): void {}

  onEnter(engine: ex.Engine): void {
    this.playCoinSound();
    engine.emit(this.event.type, this.event);
    this.kill();
  }

  private playCoinSound(): void {
    const sounds = [
      Resources.sounds.coin1,
      Resources.sounds.coin2,
      Resources.sounds.coin3,
    ];
    selectRandom(sounds).play(COIN_VOLUME);
  }
}
