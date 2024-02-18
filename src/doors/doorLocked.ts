import * as ex from "excalibur";
import {
  DoorContents,
  InstantiableDoorContents,
} from "./contents/doorContents";
import { Door } from "./door";
import {
  Resources,
  doorClosedLockedSprite,
  doorRevealLockedSprite,
  doorRevealUnlockingSprite,
  doorUnlockingSprite,
} from "../resources";
import { UnlockDoorEvent } from "../events";

export class DoorLocked extends Door {
  protected doorClosedSprite: ex.Sprite = doorClosedLockedSprite;
  protected doorRevealSprite: ex.Sprite = doorRevealLockedSprite;
  private doorUnlockingSprite: ex.Sprite = doorUnlockingSprite;
  private doorRevealUnlockingSprite: ex.Sprite = doorRevealUnlockingSprite;

  private isUnlockable = false;

  constructor(Contents?: InstantiableDoorContents<DoorContents>) {
    super(Contents);
  }

  onOpen(engine: ex.Engine) {
    if (!this.isUnlockable) return;

    Resources.sounds.unlock.play();

    const unlockingGraphic =
      this.state === "reveal"
        ? this.doorRevealUnlockingSprite
        : this.doorUnlockingSprite;

    this.updateGraphics(unlockingGraphic);
    this.state = "disabled";

    setTimeout(() => {
      const event = new UnlockDoorEvent();
      engine.emit(event.type, event);
      this.state = "locked";
      super.onOpen(engine);
    }, 250);
  }

  public setIsUnlockable(value: boolean): void {
    this.isUnlockable = value;
  }
}
