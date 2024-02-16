import * as ex from "excalibur";
import {
  DoorContents,
  InstantiableDoorContents,
} from "./doorContents/doorContents";
import { Door } from "./door";
import { doorClosedLockedSprite, doorRevealLockedSprite } from "./resources";
import { UnlockDoorEvent } from "./events";

export class DoorLocked extends Door {
  protected doorClosedSprite: ex.Sprite = doorClosedLockedSprite;
  protected doorRevealSprite: ex.Sprite = doorRevealLockedSprite;

  private isUnlockable = false;

  constructor(Contents?: InstantiableDoorContents<DoorContents>) {
    super(Contents);
  }

  onOpen(engine: ex.Engine) {
    if (!this.isUnlockable) return;

    const event = new UnlockDoorEvent();
    engine.emit(event.type, event);
    super.onOpen(engine);
  }

  public setIsUnlockable(value: boolean): void {
    this.isUnlockable = value;
  }
}
