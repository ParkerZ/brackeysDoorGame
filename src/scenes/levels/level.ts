import * as ex from "excalibur";
import { MenuBackground } from "../../menuBackground";
import { backgroundLevelSprite } from "../../resources";
import { Door } from "../../door";
import { shuffleArray } from "../../util";
import { DOOR_LAYOUTS } from "../../constants";
import { EscapeLadderButton } from "../../inventoryItems/escapeLadderButton";
import { KeyIcon } from "../../inventoryItems/keyIcon";
import { HealthBar } from "../../inventoryItems/healthBar";

export type LevelOptions = {
  healthBar: HealthBar;
  escapeLadderButton?: EscapeLadderButton;
  keyIcon?: KeyIcon;
};

export class Level extends ex.Scene {
  protected doors: Door[];
  protected escapeLadderButton: EscapeLadderButton | undefined;
  protected keyIcon: KeyIcon | undefined;
  protected healthBar: HealthBar | undefined;

  constructor(unshuffledDoors: Door[], options?: LevelOptions) {
    super();

    this.doors = shuffleArray(unshuffledDoors);

    this.escapeLadderButton = options?.escapeLadderButton;
    this.keyIcon = options?.keyIcon;
    this.healthBar = options?.healthBar;
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

    if (this.escapeLadderButton) {
      engine.add(this.escapeLadderButton);
    }

    if (this.keyIcon) {
      engine.add(this.keyIcon);
    }

    // TODO: this shouldn't be optional
    if (this.healthBar) {
      engine.add(this.healthBar);
    }
  }
}
