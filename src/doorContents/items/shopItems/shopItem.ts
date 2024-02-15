import * as ex from "excalibur";
import { Player } from "../../../player";
import { GameEvent } from "../../../events";
import { DOOR_WIDTH } from "../../../constants";
import { coinSprite } from "../../../resources";
import { DisplayText } from "../../../ui/displayText";

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
      collider: ex.Shape.Box(DOOR_WIDTH, DOOR_WIDTH, ex.Vector.Half),
    });

    this.event = event;
    this.sprite = sprite;
    this.cost = cost;
    this.player = player;

    if (tooltip) {
      this.tooltip = new DisplayText(0, 0, tooltip);
    }
  }

  onInitialize(engine: ex.Engine<any>): void {
    const text = new ex.Text({
      text: `${this.cost}`,
      font: new ex.Font({ size: 36, family: "verdana" }),
      color: ex.Color.White,
    });

    const coin = coinSprite.clone();
    coin.scale = ex.vec(0.5, 0.5);

    this.graphics.show(this.sprite);
    this.graphics.show(text, { offset: ex.vec(20, 150) });
    this.graphics.show(coin, { offset: ex.vec(40, 105) });

    this.on("pointerdown", () => {
      console.log("Can I buy?", this.player.getCoins(), this.cost);
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
