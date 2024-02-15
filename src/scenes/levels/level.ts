import * as ex from "excalibur";
import { MenuBackground } from "../../menuBackground";
import { backgroundLevelSprite } from "../../resources";
import { Door } from "../../door";
import { shuffleArray } from "../../util";
import { DOOR_LAYOUTS } from "../../constants";
import { EscapeLadderButton } from "../../ui/icons/items/escapeLadderButton";
import { KeyIcon } from "../../ui/icons/items/keyIcon";
import { HealthBar } from "../../ui/statusBars/healthBar";
import { ShieldBar } from "../../ui/statusBars/shieldBar";
import { CoinIcon } from "../../ui/icons/items/coinIcon";
import { LivingShieldIcon } from "../../ui/icons/relics/livingShieldIcon";
import { Relic } from "../../ui/icons/relics/relicIcon";
import { DoorOpenerIcon } from "../../ui/icons/relics/doorOpenerIcon";
import { GetShieldEvent } from "../../events";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { EnemyBase } from "../../doorContents/enemy/enemyBase";

export type LevelOptions = {
  healthBar: HealthBar;
  shieldBar: ShieldBar;
  escapeLadderButton?: EscapeLadderButton;
  keyIcon?: KeyIcon;
  coinIcon?: CoinIcon;
  relicIcons: (LivingShieldIcon | DoorOpenerIcon)[];
};

export class Level extends ex.Scene {
  protected doors: Door[];
  protected escapeLadderButton: EscapeLadderButton | undefined;
  protected keyIcon: KeyIcon | undefined;
  protected coinIcon: CoinIcon | undefined;
  protected healthBar: HealthBar;
  protected shieldBar: ShieldBar;
  protected relicIcons: LivingShieldIcon[];
  private layoutIndex: number;

  constructor(unshuffledDoors: Door[], index: number, options: LevelOptions) {
    super();

    this.doors = shuffleArray(unshuffledDoors);

    this.escapeLadderButton = options?.escapeLadderButton;
    this.keyIcon = options?.keyIcon;
    this.coinIcon = options?.coinIcon;
    this.healthBar = options.healthBar;
    this.shieldBar = options.shieldBar;
    this.relicIcons = options.relicIcons;

    this.layoutIndex = index - 1;
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundLevelSprite);

    engine.add(bg);

    if (!this.doors.length || !DOOR_LAYOUTS[this.layoutIndex]) return;

    this.relicIcons.forEach((icon) => {
      this.handleRelic(engine, icon);
    });

    const doorLayout = DOOR_LAYOUTS[this.layoutIndex];
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

  private openRandomDoor(engine: ex.Engine): void {
    shuffleArray(
      this.doors.filter((door) => door.getContents()?.getIsOpenableByRelic())
    )[0].onOpen(engine);
  }

  private revealRandomEnemyDoor(): void {
    console.log(
      "enemies",
      this.doors.filter((door) => door.getContents() instanceof EnemyBase)
    );
    shuffleArray(
      this.doors.filter((door) => door.getContents() instanceof EnemyBase)
    )[0].onReveal();
  }

  private handleRelic(
    engine: ex.Engine,
    icon: LivingShieldIcon | DoorOpenerIcon
  ): void {
    switch (icon.getRelic()) {
      case "livingshield":
        const event = new GetShieldEvent();
        engine.emit(event.type, event);
        break;
      case "dooropener":
        this.openRandomDoor(engine);
        break;
      case "piggybank":
        this.doors = this.doors.map((door) =>
          door.getContents() ? door : new Door(Coin1)
        );
        break;
      case "deathgrip":
        this.revealRandomEnemyDoor();
        break;
      case "spyglass":
        // TODO: implement
        break;
    }

    engine.add(icon);
  }
}
