import * as ex from "excalibur";
import { ladderSprite } from "../resources";
import { UseEscapeLadderEvent } from "../events";

export class EscapeLadderButton extends ex.ScreenElement {
  private event = new UseEscapeLadderEvent();
  private numLadders: number = 0;

  constructor(x: number, y: number) {
    super({
      x,
      y,
    });
  }

  private updateDisplay(): void {
    this.graphics.hide();
    const sprite = ladderSprite.clone();
    sprite.scale = ex.Vector.Half;

    const text = new ex.Text({
      text: `${this.numLadders}`,
      font: new ex.Font({ size: 24, family: "verdana" }),
      color: ex.Color.White,
    });

    this.graphics.show(sprite);
    this.graphics.show(text, { offset: ex.vec(40, 50) });
  }

  onInitialize(engine: ex.Engine): void {
    this.updateDisplay();

    this.on("pointerdown", () => {
      engine.emit(this.event.type, this.event);
      this.setNumLadders(this.numLadders - 1);
    });
  }

  public setNumLadders(value: number): void {
    this.numLadders = value;
    this.updateDisplay();
  }

  public setPos(pos: ex.Vector): void {
    this.pos = pos;
  }
}
