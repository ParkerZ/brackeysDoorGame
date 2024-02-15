import * as ex from "excalibur";

export class UIIcon extends ex.ScreenElement {
  private sprite: ex.Sprite;
  protected value: number = 0;
  protected showValue = true;

  constructor(x: number, y: number, sprite: ex.Sprite) {
    super({
      x,
      y,
    });

    this.sprite = sprite.clone();
    this.sprite.scale = ex.Vector.Half;
  }

  private updateDisplay(): void {
    this.graphics.hide();

    this.graphics.show(this.sprite);

    if (!this.showValue) {
      return;
    }
    const text = new ex.Text({
      text: `${this.value}`,
      font: new ex.Font({ size: 24, family: "verdana" }),
      color: ex.Color.White,
    });

    this.graphics.show(text, { offset: ex.vec(40, 50) });
  }

  onInitialize(engine: ex.Engine): void {
    this.updateDisplay();
  }

  public setValue(value: number): void {
    this.value = value;
    this.updateDisplay();
  }

  public setPos(pos: ex.Vector): void {
    this.pos = pos;
  }
}
