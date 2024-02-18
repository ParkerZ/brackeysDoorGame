import * as ex from "excalibur";
import {
  Resources,
  doorBackingSprite,
  doorClosedHoverSprite,
  doorClosedSprite,
  doorOpenSprite,
  doorOpeningAnimation,
  doorRevealSprite,
} from "../resources";
import {
  DoorContents,
  InstantiableDoorContents,
} from "./contents/doorContents";
import {
  DOOR_COLLIDER_HEIGHT,
  DOOR_COLLIDER_WIDTH,
  DOOR_SPRITE_OFFSET_X,
  DOOR_SPRITE_OFFSET_Y,
  DOOR_WIDTH,
} from "../constants";
import { UseSpyglassEvent } from "../events";
import { selectRandom } from "../util";
import { DoorBacking } from "./doorBacking";

type DoorState = "closed" | "open" | "reveal" | "disabled" | "locked";

export class Door extends ex.ScreenElement {
  private contents;
  private shouldReveal = false;
  private isHovered = false;

  protected state: DoorState = "closed";
  protected doorBackingSprite = doorBackingSprite;
  protected doorClosedSprite = doorClosedSprite;
  protected doorRevealSprite = doorRevealSprite;
  protected doorOpenSprite = doorOpenSprite;
  protected doorClosedHoverSprite = doorClosedHoverSprite;
  protected background: DoorBacking;

  constructor(Contents?: InstantiableDoorContents<DoorContents>) {
    super({
      z: 2,
      collider: ex.Shape.Box(
        DOOR_COLLIDER_WIDTH,
        DOOR_COLLIDER_HEIGHT,
        ex.Vector.Zero
      ),
    });

    this.pointer.useColliderShape = true;
    this.pointer.useGraphicsBounds = false;

    this.background = new DoorBacking();
    if (Contents) this.contents = new Contents();
  }

  public setPos(x: number, y: number): void {
    this.pos = ex.vec(x - DOOR_WIDTH / 2, y - DOOR_WIDTH / 2);
    this.contents?.setPos(x, y);
    this.background.setPos(this.pos.x, this.pos.y);
  }

  onInitialize(engine: ex.Engine): void {
    engine.add(this.background);

    if (this.state === "closed") {
      this.updateGraphics(this.doorClosedSprite);
    }

    this.on("pointerdown", () => {
      if (this.state === "disabled") return;

      if (this.shouldReveal && this.state !== "open") {
        const event = new UseSpyglassEvent();
        engine.emit(event.type, event);
        this.onReveal();
        return;
      }

      if (this.state !== "open") {
        this.onOpen(engine);
        return;
      }

      this.onEnter(engine);
    });

    this.on("pointerenter", () => {
      this.isHovered = true;
      this.background.setIsHovered(true);
      this.contents?.setIsHovered(engine, true);
    });

    this.on("pointerleave", () => {
      setTimeout(() => {
        // Wait at least one frame before checking mouse pos
        if (
          !this.collider.bounds.contains(
            engine.input.pointers.primary.lastWorldPos
          )
        ) {
          this.isHovered = false;
          this.background.setIsHovered(false);
          this.contents?.setIsHovered(engine, false);
        }
      }, Math.ceil(1000 / 60));
    });

    if (this.contents) {
      engine.add(this.contents);
    }
  }

  protected updateGraphics(sprite: ex.Graphic) {
    this.graphics.use(sprite, {
      offset: ex.vec(DOOR_SPRITE_OFFSET_X, DOOR_SPRITE_OFFSET_Y),
    });
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

  public disable() {
    this.state = "disabled";
  }

  public onReveal(): void {
    Resources.sounds.reveal.play();
    this.state = "reveal";
    this.shouldReveal = false;
    this.updateGraphics(this.doorRevealSprite);
  }

  onOpen(engine: ex.Engine): void {
    this.state = "disabled";
    this.playOpenDoorSound();

    setTimeout(() => {
      this.updateGraphics(doorOpeningAnimation);

      setTimeout(() => {
        this.updateGraphics(this.doorOpenSprite);

        if (this.contents) {
          engine.add(this.contents);
          this.contents.onOpen(engine);
          this.contents.setIsHovered(engine, this.isHovered);
        }

        this.state = "open";
      }, 100);
    }, 50);
  }

  onEnter(engine: ex.Engine): void {
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
