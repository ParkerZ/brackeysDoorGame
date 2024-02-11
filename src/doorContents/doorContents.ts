import * as ex from "excalibur";
import { doorClosedSprite, doorOpenSprite } from "../resources";

export abstract class DoorContents extends ex.ScreenElement {
  constructor(x: number, y: number, collider: ex.Collider) {
    super({
      x,
      y,
      z: 2,
      collider,
    });
  }

  onInitialize(engine: ex.Engine): void {
    this.graphics.use(doorClosedSprite);
  }

  abstract onEnter(engine: ex.Engine): void;
}

export type InstantiableDoorContents<T extends DoorContents> = {
  new (x: number, y: number, collider: ex.Collider): T;
};
