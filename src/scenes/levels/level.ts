import * as ex from "excalibur";
import { MenuBackground } from "../../menuBackground";
import { backgroundLevelSprite } from "../../resources";
import { Door } from "../../door";
import { shuffleArray } from "../../util";
import { DOOR_LAYOUTS } from "../../constants";

export class Level extends ex.Scene {
  protected doors: Door[];

  constructor(unshuffledDoors: Door[]) {
    super();

    this.doors = shuffleArray(unshuffledDoors);
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundLevelSprite);

    engine.add(bg);

    if (!this.doors.length || !DOOR_LAYOUTS[this.doors.length - 1]) return;

    const doorLayout = DOOR_LAYOUTS[this.doors.length - 1];
    console.log(this.doors.length, doorLayout);
    this.doors.forEach((door, i) => {
      door.setPos(
        engine.halfDrawWidth + doorLayout[i].x,
        engine.halfDrawHeight + doorLayout[i].y
      );
      engine.add(door);
    });
  }
}
