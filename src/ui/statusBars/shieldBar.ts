import * as ex from "excalibur";
import { shieldSprite } from "../../resources";
import {
  DOOR_CONTENTS_SPRITE_OFFSET_X,
  DOOR_CONTENTS_SPRITE_OFFSET_Y,
  INVENTORY_ITEM_SPACING,
  UI_ICONS_SPRITE_SCALE,
} from "../../constants";

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
      sprite.scale = UI_ICONS_SPRITE_SCALE;
      this.graphics.show(sprite, {
        offset: ex.vec(
          (-INVENTORY_ITEM_SPACING * barWidth) / 2 +
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

  public setCurrShields(value: number): void {
    this.currShields = value;
    this.updateDisplay();
  }

  public setPos(pos: ex.Vector): void {
    this.pos = pos;
  }
}
