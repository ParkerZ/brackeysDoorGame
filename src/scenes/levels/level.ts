import * as ex from "excalibur";
import { backgroundLevelSprite } from "../../resources";
import { Door } from "../../doors/door";
import { selectRandom, shuffleArray } from "../../util";
import { DOOR_LAYOUTS } from "../../constants";
import { GetShieldEvent } from "../../events";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { EnemyBase } from "../../doors/contents/enemy/enemyBase";
import { CoinBase } from "../../doors/contents/items/coins/coinBase";
import { DoorLocked } from "../../doors/doorLocked";
import { GameScene, LevelOptions } from "../gameScene";
import { RelicIcon } from "../../ui/icons/relics/relicIcon";
import {
  DoorContents,
  InstantiableDoorContents,
} from "../../doors/contents/doorContents";
import { DeathGripRelic } from "../../doors/contents/items/relics/deathGripRelic";
import { DoorOpenerRelic } from "../../doors/contents/items/relics/doorOpenerRelic";
import { ExtraLifeRelic } from "../../doors/contents/items/relics/extraLifeRelic";
import { LivingShieldRelic } from "../../doors/contents/items/relics/livingShieldRelic";
import { LockPickRelic } from "../../doors/contents/items/relics/lockPickRelic";
import { PiggyBankRelic } from "../../doors/contents/items/relics/piggyBankRelic";
import { SpyglassRelic } from "../../doors/contents/items/relics/spyglassRelic";

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

    // Doors need to be added before relics
    const doorLayout = DOOR_LAYOUTS[this.layoutIndex];
    console.log(doorLayout);
    this.doors.forEach((door, i) => {
      // if locked door is empty, add a relic and replace door
      if (door instanceof DoorLocked && !door.getContents()) {
        console.log("something is wrong here");
        door.setContents(selectRandom(this.getAvailableRelics()));
      }

      door.setPos(
        engine.halfDrawWidth + doorLayout[i].x,
        engine.halfDrawHeight + doorLayout[i].y
      );
      engine.add(door);

      return door;
    });

    this.relicIcons.forEach((icon) => this.handleRelic(engine, icon));

    if (this.playerHasKey) {
      this.setDoorsUnlockable();
    }

    this.createMetalDetectorListener(engine);
    this.createKeyListener(engine);
  }

  private openRandomDoor(engine: ex.Engine): void {
    shuffleArray(
      this.doors.filter(
        (door) =>
          !(door instanceof DoorLocked) &&
          door.getContents()?.getIsOpenableByRelic()
      )
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
