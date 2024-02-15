import * as ex from "excalibur";
import { DOOR_WIDTH } from "../constants";

export class DisplayText extends ex.ScreenElement {
  private text;

  constructor(x: number, y: number, text: string) {
    super({
      x,
      y,
    });

    this.text = text;
  }

  onInitialize(_engine: ex.Engine): void {
    const text = new ex.Text({
      text: this.text,
      font: new ex.Font({
        size: 18,
        family: "verdana",
        textAlign: ex.TextAlign.Center,
      }),
      color: ex.Color.White,
    });

    const innerRect = new ex.Rectangle({
      width: text.width + 10,
      height: text.height + 10,
      color: ex.Color.Black,
    });

    const outerRect = new ex.Rectangle({
      width: innerRect.width + 4,
      height: innerRect.height + 4,
      color: ex.Color.White,
    });

    this.graphics.show(outerRect, {
      offset: ex.vec(-outerRect.width / 2, -82),
    });
    this.graphics.show(innerRect, {
      offset: ex.vec(-innerRect.width / 2, -80),
    });
    this.graphics.show(text, { offset: ex.vec(0, -60) });
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x, y);
  }
}
