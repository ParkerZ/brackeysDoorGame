import * as ex from "excalibur";
import { DOOR_WIDTH } from "../constants";
import { AddCoinsEvent, LoadNextLevelEvent, TakeDamageEvent } from "../events";

export abstract class DoorContents extends ex.ScreenElement {
  private sprite;
  protected event;

  constructor(
    Event:
      | typeof AddCoinsEvent
      | typeof TakeDamageEvent
      | typeof LoadNextLevelEvent,
    sprite: ex.Sprite,
    value?: number
  ) {
    super({
      z: 2,
      collider: ex.Shape.Box(DOOR_WIDTH, DOOR_WIDTH, ex.Vector.Half),
    });

    this.sprite = sprite;
    this.event = new Event(value ?? 1);
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x - DOOR_WIDTH / 2, y - DOOR_WIDTH / 2);
  }

  onInitialize(_engine: ex.Engine): void {
    this.graphics.use(this.sprite);
  }

  abstract onOpen(engine: ex.Engine): void;
  abstract onEnter(engine: ex.Engine): void;
}

export type InstantiableDoorContents<T extends DoorContents> = {
  new (): T;
};
