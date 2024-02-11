import * as ex from "excalibur";
import { doorClosedSprite, doorOpenSprite } from "./resources";
import {
  DoorContents,
  InstantiableDoorContents,
} from "./doorContents/doorContents";

const collider = ex.Shape.Box(
  doorClosedSprite.width,
  doorClosedSprite.height,
  ex.Vector.Half
);

export class Door extends ex.ScreenElement {
  private contents;
  private isOpen = false;

  constructor(
    x: number,
    y: number,
    contents?: InstantiableDoorContents<DoorContents>
  ) {
    super({
      x: x - doorClosedSprite.width / 2,
      y: y - doorClosedSprite.height / 2,
      collider,
    });

    if (contents)
      this.contents = new contents(this.pos.x, this.pos.y, collider);
  }

  onInitialize(engine: ex.Engine): void {
    this.graphics.use(doorClosedSprite);

    this.on("pointerdown", () => {
      if (!this.isOpen) this.onOpen(engine);
      else this.onEnter(engine);
    });

    this.on("pointerup", () => {
      console.log("up");
    });

    this.on("pointerenter", () => {
      console.log("hover");
    });

    this.on("pointerleave", () => {
      console.log("off");
    });
  }

  onOpen(engine: ex.Engine): void {
    console.log("Open");
    this.graphics.use(doorOpenSprite);
    this.isOpen = true;

    if (this.contents) {
      engine.add(this.contents);
    }
  }

  onEnter(engine: ex.Engine): void {
    console.log("Enter");
    if (!this.contents) {
      return;
    }

    this.contents.onEnter(engine);
  }
}
