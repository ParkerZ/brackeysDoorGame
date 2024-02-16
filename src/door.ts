import * as ex from "excalibur";
import {
  Resources,
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
import { selectRandom } from "./util";

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

    if (this.contents) {
      engine.add(this.contents);
    }
  }

  public getContents() {
    return this.contents;
  }

  public setContents(Contents: InstantiableDoorContents<DoorContents>) {
    this.contents = new Contents();
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
    this.playOpenDoorSound();

    setTimeout(() => {
      this.graphics.use(doorOpenSprite);

      if (this.contents) {
        engine.add(this.contents);
        this.contents.onOpen(engine);
      }
    }, 100);
  }

  onEnter(engine: ex.Engine): void {
    console.log("Enter");
    if (!this.contents || this.contents.isKilled()) {
      return;
    }

    this.contents.onEnter(engine);
  }

  private playOpenDoorSound(): void {
    const sounds = [
      Resources.sounds.doorOpen1,
      Resources.sounds.doorOpen2,
      Resources.sounds.doorOpen3,
    ];
    selectRandom(sounds).play();
  }
}
