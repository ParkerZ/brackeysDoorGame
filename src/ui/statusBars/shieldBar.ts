import * as ex from "excalibur";
import { shieldSprite } from "../../resources";
import { INVENTORY_ITEM_SPACING } from "../../constants";

export class ShieldBar extends ex.ScreenElement {
  private currShields: number;

  constructor(x: number, y: number, shields: number) {
    super({
      x,
      y,
    });

    this.currShields = shields;
  }

  private updateDisplay(): void {
    this.graphics.hide();
    const sprites: ex.Sprite[] = new Array(this.currShields).fill(
      shieldSprite.clone()
    );

    const barWidth = Math.max(this.currShields, 3);
    sprites.forEach((sprite, i) => {
      sprite.scale = ex.Vector.Half;
      this.graphics.show(sprite, {
        offset: ex.vec(
          (-INVENTORY_ITEM_SPACING * barWidth) / 2 + INVENTORY_ITEM_SPACING * i,
          0
        ),
      });
    });
  }

  onInitialize(engine: ex.Engine): void {
    this.updateDisplay();
  }

  public setCurrShields(value: number): void {
    this.currShields = value;
    this.updateDisplay();
  }

  public setPos(pos: ex.Vector): void {
    this.pos = pos;
  }
}
