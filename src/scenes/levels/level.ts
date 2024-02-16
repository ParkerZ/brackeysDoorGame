import * as ex from "excalibur";
import { backgroundLevelSprite } from "../../resources";
import { Door } from "../../door";
import { selectRandom, shuffleArray } from "../../util";
import { DOOR_LAYOUTS } from "../../constants";
import { GetShieldEvent } from "../../events";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { EnemyBase } from "../../doorContents/enemy/enemyBase";
import { CoinBase } from "../../doorContents/items/coin/coinBase";
import { DoorLocked } from "../../doorLocked";
import { GameScene, LevelOptions } from "../gameScene";
import { RelicIcon } from "../../ui/icons/relics/relicIcon";
import {
  DoorContents,
  InstantiableDoorContents,
} from "../../doorContents/doorContents";
import { DeathGripRelic } from "../../doorContents/items/relics/deathGripRelic";
import { DoorOpenerRelic } from "../../doorContents/items/relics/doorOpenerRelic";
import { ExtraLifeRelic } from "../../doorContents/items/relics/extraLifeRelic";
import { LivingShieldRelic } from "../../doorContents/items/relics/livingShieldRelic";
import { LockPickRelic } from "../../doorContents/items/relics/lockPickRelic";
import { PiggyBankRelic } from "../../doorContents/items/relics/piggyBankRelic";
import { SpyglassRelic } from "../../doorContents/items/relics/spyglassRelic";

export class Level extends GameScene {
  protected doors: Door[];
  private layoutIndex: number;

  constructor(unshuffledDoors: Door[], index: number, options: LevelOptions) {
    super(options, backgroundLevelSprite);

    this.doors = shuffleArray(unshuffledDoors);

    this.layoutIndex = index - 1;
  }

  public setDoor(doors: Door[]): void {
    this.doors = doors;
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);

    if (!this.doors.length || !DOOR_LAYOUTS[this.layoutIndex]) return;

    const doorLayout = DOOR_LAYOUTS[this.layoutIndex];
    this.doors.forEach((door, i) => {
      let doorToAdd = door;

      // if locked door is empty, add a relic
      if (doorToAdd instanceof DoorLocked && !doorToAdd.getContents()) {
        const existingContents = doorToAdd.getContents();

        doorToAdd = new DoorLocked(selectRandom(this.getAvailableRelics()));
      }

      doorToAdd.setPos(
        engine.halfDrawWidth + doorLayout[i].x,
        engine.halfDrawHeight + doorLayout[i].y
      );
      engine.add(doorToAdd);
    });

    if (this.playerHasKey) {
      this.setDoorsUnlockable();
    }

    this.createMetalDetectorListener(engine);
    this.createKeyListener(engine);
  }

  private openRandomDoor(engine: ex.Engine): void {
    shuffleArray(
      this.doors.filter((door) => door.getContents()?.getIsOpenableByRelic())
    )[0].onOpen(engine);
  }

  private revealRandomEnemyDoor(): void {
    shuffleArray(
      this.doors.filter((door) => door.getContents() instanceof EnemyBase)
    )[0].onReveal();
  }

  private createSpyglassListener(engine: ex.Engine): void {
    engine.on("usespyglass", () => {
      this.doors.forEach((door) => door.setShouldReveal(false));
    });
  }

  private createMetalDetectorListener(engine: ex.Engine): void {
    engine.on("usemetaldetector", () => {
      this.doors.forEach((door, i) => {
        if (door.getContents() instanceof CoinBase) {
          door.onOpen(engine);
        }
      });
    });
  }

  private createKeyListener(engine: ex.Engine): void {
    engine.on("getkey", () => {
      this.setDoorsUnlockable();
    });
  }

  private setDoorsUnlockable(): void {
    this.doors.forEach((door) => {
      if (door instanceof DoorLocked) {
        door.setIsUnlockable(true);
      }
    });
  }

  protected handleRelic(engine: ex.Engine, icon: RelicIcon): void {
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
        this.createSpyglassListener(engine);
        this.doors.forEach((door) => door.setShouldReveal(true));
        break;
    }

    super.handleRelic(engine, icon);
  }

  onDeactivate(context: ex.SceneActivationContext<undefined>): void {
    this.doors = [];
  }

  protected convertRelicToShopRelic(
    relic: InstantiableDoorContents<DoorContents>
  ) {
    switch (relic) {
      case DeathGripRelic:
        return "deathgrip";
      case DoorOpenerRelic:
        return "dooropener";
      case ExtraLifeRelic:
        return "extralife";
      case LivingShieldRelic:
        return "livingshield";
      case LockPickRelic:
        return "lockpick";
      case PiggyBankRelic:
        return "piggybank";
      case SpyglassRelic:
        return "spyglass";
      default:
        return "deathgrip";
    }
  }

  protected getAvailableRelics() {
    const possibleRelics = [
      DeathGripRelic,
      DoorOpenerRelic,
      ExtraLifeRelic,
      LivingShieldRelic,
      LockPickRelic,
      PiggyBankRelic,
      SpyglassRelic,
    ];

    const ownedRelics = this.relicIcons.map((relic) => relic.getRelic());

    const availableRelics: InstantiableDoorContents<DoorContents>[] =
      possibleRelics.filter(
        (shopRelic) =>
          !ownedRelics.includes(this.convertRelicToShopRelic(shopRelic))
      );

    return availableRelics;
  }
}
