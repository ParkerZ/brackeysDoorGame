import * as ex from "excalibur";
import {
  doorClosedSprite,
  doorOpenSprite,
  doorRevealSprite,
} from "./resources";
import {
  DoorContents,
  InstantiableDoorContents,
} from "./doorContents/doorContents";
import { DOOR_WIDTH } from "./constants";
import { UseSpyglassEvent } from "./events";

const collider = ex.Shape.Box(DOOR_WIDTH, DOOR_WIDTH, ex.Vector.Half);

export class Door extends ex.ScreenElement {
  private contents;
  private isOpen = false;
  private isRevealed = false;
  private shouldReveal = false;

  protected doorClosedSprite = doorClosedSprite;
  protected doorRevealSprite = doorRevealSprite;

  constructor(Contents?: InstantiableDoorContents<DoorContents>) {
    super({
      z: 2,
      collider,
    });

    if (Contents) this.contents = new Contents();
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x - DOOR_WIDTH / 2, y - DOOR_WIDTH / 2);
    this.contents?.setPos(x, y);
  }

  onInitialize(engine: ex.Engine): void {
    if (!this.isOpen && !this.isRevealed) {
      this.graphics.use(this.doorClosedSprite);
    }

    this.on("pointerdown", () => {
      if (this.shouldReveal) {
        const event = new UseSpyglassEvent();
        engine.emit(event.type, event);
        this.onReveal();
        return;
      }

      if (!this.isOpen) {
        this.onOpen(engine);
        return;
      }

      this.onEnter(engine);
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

    if (this.contents) {
      engine.add(this.contents);
    }
  }

  public getContents() {
    return this.contents;
  }

  public setShouldReveal(value: boolean): void {
    this.shouldReveal = value;
  }

  public onReveal(): void {
    this.isRevealed = true;
    this.graphics.use(this.doorRevealSprite);
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
