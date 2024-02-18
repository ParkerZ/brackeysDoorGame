import * as ex from "excalibur";
import { heartEmptySprite, heartSprite } from "../../resources";
import {
  DOOR_CONTENTS_SPRITE_OFFSET_X,
  DOOR_CONTENTS_SPRITE_OFFSET_Y,
  INVENTORY_ITEM_SPACING,
  UI_ICONS_SPRITE_SCALE,
} from "../../constants";

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
      sprite.scale = UI_ICONS_SPRITE_SCALE;
      this.graphics.show(sprite, {
        offset: ex.vec(
          (-INVENTORY_ITEM_SPACING * this.maxHearts) / 2 +
            INVENTORY_ITEM_SPACING * i +
            DOOR_CONTENTS_SPRITE_OFFSET_X / 2,
          DOOR_CONTENTS_SPRITE_OFFSET_Y / 2
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
