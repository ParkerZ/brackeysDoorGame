import * as ex from "excalibur";
import { INVENTORY_ITEM_SPACING } from "../constants";

export type DisplayTextPlacement = "top" | "right";

export class DisplayText extends ex.ScreenElement {
  private placement: DisplayTextPlacement;
  private text;

  constructor(
    x: number,
    y: number,
    text: string,
    placement?: DisplayTextPlacement
  ) {
    super({
      x,
      y,
      z: 3,
    });

    this.text = text;
    this.placement = placement ?? "top";
  }

  onInitialize(engine: ex.Engine): void {
    const text = new ex.Text({
      text: this.text,
      font: new ex.Font({
        size: 18,
        family: "Bit Fantasy",
        textAlign: ex.TextAlign.Center,
      }),
      color: ex.Color.White,
    });

    const innerRect = new ex.Rectangle({
      width: text.width + 14,
      height: text.height + 10,
      color: ex.Color.Black,
    });

    const outerRect = new ex.Rectangle({
      width: innerRect.width + 4,
      height: innerRect.height + 4,
      color: ex.Color.White,
    });

    const width = outerRect.width;
    const height = outerRect.height;

    this.graphics.show(outerRect, {
      offset: this.getOuterRectOffset(height, width, engine),
    });
    this.graphics.show(innerRect, {
      offset: this.getInnerRectOffset(height, width, engine),
    });
    this.graphics.show(text, {
      offset: this.getTextOffset(height, width, engine),
    });
  }

  private getOuterRectOffset(
    height: number,
    width: number,
    engine: ex.Engine
  ): ex.Vector {
    if (this.placement === "right") {
      return ex.vec(INVENTORY_ITEM_SPACING, 27);
    } else {
      return this.clipOffset(
        ex.vec(-width / 2 - 4, -82),
        height,
        width,
        engine
      );
    }
  }

  private getInnerRectOffset(
    height: number,
    width: number,
    engine: ex.Engine
  ): ex.Vector {
    if (this.placement === "right") {
      return ex.vec(INVENTORY_ITEM_SPACING + 2, 29);
    } else {
      return this.clipOffset(
        ex.vec((4 - width) / 2 - 4, -80),
        height,
        width,
        engine
      );
    }
  }

  private getTextOffset(
    height: number,
    width: number,
    engine: ex.Engine
  ): ex.Vector {
    if (this.placement === "right") {
      return ex.vec(width / 2 + INVENTORY_ITEM_SPACING, 44);
    } else {
      return this.clipOffset(ex.vec(-4, -64), height, width, engine);
    }
  }

  // TODO: only works for top placement
  private clipOffset(
    offset: ex.Vector,
    height: number,
    width: number,
    engine: ex.Engine
  ): ex.Vector {
    const margin = 5;
    let x = offset.x;
    let y = offset.y;

    // Keep tooltip on screen horizontally
    if (this.pos.x < width / 2 + margin) {
      x += width / 2 + margin - this.pos.x;
    } else if (width / 2 + this.pos.x + margin > engine.drawWidth) {
      x -= width / 2 + this.pos.x + margin - engine.drawWidth;
    }
    // Keep tooltip on screen vertically
    if (this.pos.y < height / 2 + margin) {
      y += height / 2 + margin - this.pos.y;
    } else if (height / 2 + this.pos.y + margin > engine.drawHeight) {
      y -= height / 2 + this.pos.y + margin - engine.drawHeight;
    }

    return ex.vec(x, y);
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x, y);
  }
}
