import * as ex from "excalibur";
import { Player } from "../../../player";
import {
  GetEscapeLadderEvent,
  GetHealthPotionEvent,
  GetKeyEvent,
  GetRelicEvent,
  GetShieldEvent,
} from "../../../events";
import { DOOR_WIDTH } from "../../../constants";
import { coinSprite } from "../../../resources";

export class ShopItem extends ex.ScreenElement {
  protected event;
  private sprite;
  protected cost = 2;
  protected player: Player;

  // TODO: why can't I just pass an instantiated event?
  constructor(
    Event:
      | typeof GetHealthPotionEvent
      | typeof GetShieldEvent
      | typeof GetEscapeLadderEvent
      | typeof GetKeyEvent
      | typeof GetRelicEvent,
    sprite: ex.Sprite,
    cost: number,
    player: Player,
    eventPayload?: any
  ) {
    super({
      collider: ex.Shape.Box(DOOR_WIDTH, DOOR_WIDTH, ex.Vector.Half),
    });

    this.event = new Event(eventPayload);
    this.sprite = sprite;
    this.cost = cost;
    this.player = player;
  }

  onInitialize(engine: ex.Engine<any>): void {
    const text = new ex.Text({
      text: `${this.cost}`,
      font: new ex.Font({ size: 36, family: "verdana" }),
      color: ex.Color.White,
    });

    const coin = coinSprite.clone();
    coin.scale = ex.vec(0.5, 0.5);

    // TODO: hover is weird
    this.graphics.show(this.sprite);
    this.graphics.show(text, { offset: ex.vec(20, 150) });
    this.graphics.show(coin, { offset: ex.vec(40, 105) });

    // this.on("pointerenter", () => {
    //   console.log("hover");
    // });

    // this.on("pointerleave", () => {
    //   console.log("off");
    // });

    this.on("pointerdown", () => {
      console.log("Can I buy?", this.player.getCoins(), this.cost);
      if (this.player.getCoins() < this.cost) {
        return;
      }

      this.onBuy(engine);
    });
  }

  protected onBuy(engine: ex.Engine) {
    this.player.useCoins(engine, this.cost);
    engine.emit(this.event.type, this.event);
    this.kill();
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x - DOOR_WIDTH / 2, y - DOOR_WIDTH / 2);
  }
}
