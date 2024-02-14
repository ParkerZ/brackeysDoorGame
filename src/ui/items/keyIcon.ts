import * as ex from "excalibur";
import { keySprite } from "../../resources";

// TODO: make base class
export class KeyIcon extends ex.ScreenElement {
  private numKeys: number = 0;

  constructor(x: number, y: number) {
    super({
      x,
      y,
    });
  }

  private updateDisplay(): void {
    this.graphics.hide();
    const sprite = keySprite.clone();
    sprite.scale = ex.Vector.Half;

    const text = new ex.Text({
      text: `${this.numKeys}`,
      font: new ex.Font({ size: 24, family: "verdana" }),
      color: ex.Color.White,
    });

    this.graphics.show(sprite);
    this.graphics.show(text, { offset: ex.vec(40, 50) });
  }

  onInitialize(engine: ex.Engine): void {
    this.updateDisplay();
  }

  public setNumKeys(value: number): void {
    this.numKeys = value;
    this.updateDisplay();
  }

  public setPos(pos: ex.Vector): void {
    this.pos = pos;
  }
}
