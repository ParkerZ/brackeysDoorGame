import * as ex from "excalibur";
import { MenuBackground } from "../../menuBackground";
import { backgroundLevelSprite } from "../../resources";
import { Door } from "../../door";
import { shuffleArray } from "../../util";
import { DOOR_LAYOUTS } from "../../constants";
import { EscapeLadderButton } from "../../ui/items/escapeLadderButton";
import { KeyIcon } from "../../ui/items/keyIcon";
import { HealthBar } from "../../ui/statusBars/healthBar";
import { ShieldBar } from "../../ui/statusBars/shieldBar";
import { CoinIcon } from "../../ui/items/coinIcon";

export type LevelOptions = {
  healthBar: HealthBar;
  shieldBar: ShieldBar;
  escapeLadderButton?: EscapeLadderButton;
  keyIcon?: KeyIcon;
  coinIcon?: CoinIcon;
};

export class Level extends ex.Scene {
  protected doors: Door[];
  protected escapeLadderButton: EscapeLadderButton | undefined;
  protected keyIcon: KeyIcon | undefined;
  protected coinIcon: CoinIcon | undefined;
  protected healthBar: HealthBar;
  protected shieldBar: ShieldBar;
  private layoutIndex: number;

  constructor(unshuffledDoors: Door[], index: number, options: LevelOptions) {
    super();

    this.doors = shuffleArray(unshuffledDoors);

    this.escapeLadderButton = options?.escapeLadderButton;
    this.keyIcon = options?.keyIcon;
    this.coinIcon = options?.coinIcon;
    this.healthBar = options?.healthBar;
    this.shieldBar = options?.shieldBar;

    this.layoutIndex = index - 1;
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundLevelSprite);

    engine.add(bg);

    if (!this.doors.length || !DOOR_LAYOUTS[this.layoutIndex]) return;

    const doorLayout = DOOR_LAYOUTS[this.layoutIndex];
    console.log(this.doors.length, doorLayout);
    this.doors.forEach((door, i) => {
      door.setPos(
        engine.halfDrawWidth + doorLayout[i].x,
        engine.halfDrawHeight + doorLayout[i].y
      );
      engine.add(door);
    });

    engine.add(this.healthBar);
    engine.add(this.shieldBar);

    if (this.escapeLadderButton) {
      engine.add(this.escapeLadderButton);
    }

    if (this.keyIcon) {
      engine.add(this.keyIcon);
    }

    if (this.coinIcon) {
      engine.add(this.coinIcon);
    }
  }
}
