import * as ex from "excalibur";
import { coinSprite } from "../../resources";

// TODO: make base class
export class CoinIcon extends ex.ScreenElement {
  private numCoins: number = 0;

  constructor(x: number, y: number) {
    super({
      x,
      y,
    });
  }

  private updateDisplay(): void {
    this.graphics.hide();
    const sprite = coinSprite.clone();
    sprite.scale = ex.Vector.Half;

    const text = new ex.Text({
      text: `${this.numCoins}`,
      font: new ex.Font({ size: 24, family: "verdana" }),
      color: ex.Color.White,
    });

    this.graphics.show(sprite);
    this.graphics.show(text, { offset: ex.vec(40, 50) });
  }

  onInitialize(engine: ex.Engine): void {
    this.updateDisplay();
  }

  public setNumCoins(value: number): void {
    this.numCoins = value;
    this.updateDisplay();
  }

  public setPos(pos: ex.Vector): void {
    this.pos = pos;
  }
}
