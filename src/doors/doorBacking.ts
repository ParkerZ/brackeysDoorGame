import * as ex from "excalibur";
import { doorBackingHoverSprite, doorBackingSprite } from "../resources";
import { DOOR_SPRITE_OFFSET_X, DOOR_SPRITE_OFFSET_Y } from "../constants";

export class DoorBacking extends ex.ScreenElement {
  private sprite = doorBackingSprite;
  private hoverSprite = doorBackingHoverSprite;
  private isHovered = false;
  constructor() {
    super({
      z: 0,
    });
  }

  onInitialize(engine: ex.Engine<any>): void {
    this.updateGraphics();
  }

  public setIsHovered(val: boolean): void {
    this.isHovered = val;
    this.updateGraphics();
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x, y);
  }

  private updateGraphics(): void {
    if (this.isHovered) {
      this.graphics.use(this.hoverSprite, {
        offset: ex.vec(DOOR_SPRITE_OFFSET_X, DOOR_SPRITE_OFFSET_Y),
      });
    } else {
      this.graphics.use(this.sprite, {
        offset: ex.vec(DOOR_SPRITE_OFFSET_X, DOOR_SPRITE_OFFSET_Y),
      });
    }
  }
}
