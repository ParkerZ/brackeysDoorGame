import * as ex from "excalibur";
import { DisplayText } from "../displayText";

export class UIIcon extends ex.ScreenElement {
  private sprite: ex.Sprite;
  protected value: number = 0;
  protected showValue = true;
  protected tooltip: DisplayText | undefined;

  constructor(x: number, y: number, sprite: ex.Sprite, tooltip?: string) {
    super({
      x,
      y,
    });

    this.sprite = sprite.clone();
    this.sprite.scale = ex.Vector.Half;

    if (tooltip) {
      this.tooltip = new DisplayText(0, 0, tooltip, "right");
    }
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

    this.on("pointerenter", () => {
      if (this.tooltip) engine.add(this.tooltip);
    });

    this.on("pointerleave", () => {
      if (this.tooltip) engine.remove(this.tooltip);
    });

    this.on("kill", () => {
      if (this.tooltip) engine.remove(this.tooltip);
    });
  }

  public setValue(value: number): void {
    this.value = value;
    this.updateDisplay();
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x, y);
    if (this.tooltip) this.tooltip.setPos(x, y);
  }
}
