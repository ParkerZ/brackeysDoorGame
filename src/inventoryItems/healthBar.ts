import * as ex from "excalibur";
import {
  heartEmptySprite,
  heartSprite,
  keySprite,
  ladderSprite,
} from "../resources";
import { INVENTORY_ITEM_OFFSET, INVENTORY_ITEM_SPACING } from "../constants";

export class HealthBar extends ex.ScreenElement {
  private maxHearts: number;
  private currHearts: number;

  constructor(x: number, y: number, hearts: number) {
    super({
      x,
      y,
    });

    this.maxHearts = hearts;
    this.currHearts = hearts;
  }

  private updateDisplay(): void {
    this.graphics.hide();
    const sprites: ex.Sprite[] = new Array(this.maxHearts)
      .fill(undefined)
      .map((_v, i) =>
        i < this.currHearts ? heartSprite.clone() : heartEmptySprite.clone()
      );

    sprites.forEach((sprite, i) => {
      sprite.scale = ex.Vector.Half;
      this.graphics.show(sprite, {
        offset: ex.vec(
          (-INVENTORY_ITEM_SPACING * this.maxHearts) / 2 +
            INVENTORY_ITEM_SPACING * i,
          0
        ),
      });
    });
  }

  onInitialize(engine: ex.Engine): void {
    this.updateDisplay();
  }

  public setCurrHearts(value: number): void {
    this.currHearts = value;
    this.updateDisplay();
  }

  public setPos(pos: ex.Vector): void {
    this.pos = pos;
  }
}
