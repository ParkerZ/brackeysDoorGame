import * as ex from "excalibur";
import { doorClosedSprite, doorOpenSprite } from "./resources";
import {
  DoorContents,
  InstantiableDoorContents,
} from "./doorContents/doorContents";
import { DOOR_WIDTH } from "./constants";

const collider = ex.Shape.Box(DOOR_WIDTH, DOOR_WIDTH, ex.Vector.Half);

export class Door extends ex.ScreenElement {
  private contents;
  private isOpen = false;

  constructor(contents?: InstantiableDoorContents<DoorContents>) {
    super({
      collider,
    });

    if (contents) this.contents = new contents();
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x - DOOR_WIDTH / 2, y - DOOR_WIDTH / 2);
    this.contents?.setPos(x, y);
  }

  onInitialize(engine: ex.Engine): void {
    if (!this.isOpen) {
      this.graphics.use(doorClosedSprite);
    }

    this.on("pointerdown", () => {
      if (!this.isOpen) this.onOpen(engine);
      else this.onEnter(engine);
    });

    this.on("pointerup", () => {
      // console.log("up");
    });

    this.on("pointerenter", () => {
      // console.log("hover");
    });

    this.on("pointerleave", () => {
      // console.log("off");
    });
  }

  public getContents() {
    return this.contents;
  }

  onOpen(engine: ex.Engine): void {
    this.isOpen = true;
    this.graphics.use(doorOpenSprite);

    if (this.contents) {
      engine.add(this.contents);
      this.contents.onOpen(engine);
    }
  }

  onEnter(engine: ex.Engine): void {
    console.log("Enter");
    if (!this.contents || this.contents.isKilled()) {
      return;
    }

    this.contents.onEnter(engine);
  }
}
