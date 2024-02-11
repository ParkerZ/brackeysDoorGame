import * as ex from "excalibur";
import { doorClosedSprite, doorOpenSprite, stairsSprite } from "../resources";
import { DoorContents } from "./doorContents";

export class StairsNextLevel extends DoorContents {
  constructor(x: number, y: number) {
    super(
      x,
      y,
      ex.Shape.Box(
        doorClosedSprite.width,
        doorClosedSprite.height,
        ex.Vector.Half
      )
    );
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    this.graphics.use(stairsSprite);
    console.log("init");
  }

  onEnter(engine: ex.Engine): void {
    console.log("Enter stairs start");
    engine.emit("loadNextLevel");
  }
}
