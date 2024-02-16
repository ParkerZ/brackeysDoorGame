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
} from "../resources";
import { UnlockDoorEvent } from "../events";

export class DoorLocked extends Door {
  protected doorClosedSprite: ex.Sprite = doorClosedLockedSprite;
  protected doorRevealSprite: ex.Sprite = doorRevealLockedSprite;

  private isUnlockable = false;

  constructor(Contents?: InstantiableDoorContents<DoorContents>) {
    super(Contents);
  }

  onOpen(engine: ex.Engine) {
    if (!this.isUnlockable) return;

    Resources.sounds.unlock.play();

    const event = new UnlockDoorEvent();
    engine.emit(event.type, event);
    super.onOpen(engine);
  }

  public setIsUnlockable(value: boolean): void {
    this.isUnlockable = value;
  }
}
