import * as ex from "excalibur";
import { Player } from "../../../../player";
import { GameEvent } from "../../../../events";
import {
  DOOR_COLLIDER_HEIGHT,
  DOOR_COLLIDER_WIDTH,
  DOOR_CONTENTS_SPRITE_OFFSET_X,
  DOOR_CONTENTS_SPRITE_OFFSET_Y,
  DOOR_WIDTH,
  UI_ICONS_SPRITE_SCALE,
} from "../../../../constants";
import { coinSprite } from "../../../../resources";
import { DisplayText } from "../../../../ui/displayText";

export class ShopItem extends ex.ScreenElement {
  protected event;
  private sprite;
  protected cost = 2;
  protected player: Player;
  protected tooltip: DisplayText | undefined;

  constructor(
    event: GameEvent,
    sprite: ex.Sprite,
    cost: number,
    player: Player,
    tooltip?: string
  ) {
    super({
      collider: ex.Shape.Box(
        DOOR_COLLIDER_WIDTH,
        DOOR_COLLIDER_HEIGHT + 35,
        ex.Vector.Zero
      ),
    });

    this.event = event;
    this.sprite = sprite;
    this.cost = cost;
    this.player = player;

    this.pointer.useColliderShape = true;
    this.pointer.useGraphicsBounds = false;

    if (tooltip) {
      this.tooltip = new DisplayText(0, 0, tooltip);
    }
  }

  onInitialize(engine: ex.Engine<any>): void {
    const text = new ex.Text({
      text: `${this.cost}`,
      font: new ex.Font({
        size: 48,
        family: "Bit Fantasy",
        textAlign: ex.TextAlign.Left,
      }),
      color: ex.Color.White,
    });

    const coin = coinSprite.clone();
    coin.scale = UI_ICONS_SPRITE_SCALE;

    this.graphics.show(this.sprite, {
      offset: ex.vec(
        DOOR_CONTENTS_SPRITE_OFFSET_X,
        DOOR_CONTENTS_SPRITE_OFFSET_Y
      ),
    });
    this.graphics.show(text, { offset: ex.vec(15, 163) });
    this.graphics.show(coin, { offset: ex.vec(15, 102) });

    this.on("pointerdown", () => {
      if (this.player.getCoins() < this.cost) {
        return;
      }

      this.onBuy(engine);
    });

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

  protected onBuy(engine: ex.Engine) {
    this.player.useCoins(engine, this.cost);
    engine.emit(this.event.type, this.event);
    this.kill();
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x - DOOR_WIDTH / 2, y - DOOR_WIDTH / 2);
    if (this.tooltip) this.tooltip.setPos(x, y);
  }
}
