import * as ex from "excalibur";
import { EscapeLadderButton } from "./ui/icons/items/escapeLadderButton";
import { KeyIcon } from "./ui/icons/items/keyIcon";
import {
  HEAL_VOLUME,
  HURT_VOLUME,
  INVENTORY_ITEM_OFFSET,
  INVENTORY_ITEM_PLACEMENT_MS,
  INVENTORY_ITEM_SPACING,
} from "./constants";
import { HealthBar } from "./ui/statusBars/healthBar";
import { ShieldBar } from "./ui/statusBars/shieldBar";
import { CoinIcon } from "./ui/icons/items/coinIcon";
import { Relic } from "./ui/icons/relics/relicIcon";
import { LivingShieldIcon } from "./ui/icons/relics/livingShieldIcon";
import { DoorOpenerIcon } from "./ui/icons/relics/doorOpenerIcon";
import { PiggyBankIcon } from "./ui/icons/relics/piggyBankIcon";
import { DeathGripIcon } from "./ui/icons/relics/deathGripIcon";
import { SpyglassIcon } from "./ui/icons/relics/spyglassIcon";
import { PlayerDieEvent } from "./events";
import { ExtraLifeIcon } from "./ui/icons/relics/extraLifeIcon";
import { MetalDetectorButton } from "./ui/icons/items/metalDetectorButton";
import { LockPickIcon } from "./ui/icons/relics/lockPickIcon";
import { Resources } from "./resources";

export class Player extends ex.Actor {
  private isInit = false;

  private maxHealth: number = 3;
  private health: number = 3;
  private coins: number = 0;
  private shield: number = 0;
  private numKeys: number = 0;
  private numEscapeLadders: number = 0;
  private numMetalDetectors: number = 0;

  private escapeLadderButton: EscapeLadderButton;
  private metalDetectorButton: MetalDetectorButton;
  private keyIcon: KeyIcon;
  private coinIcon: CoinIcon;
  private healthBar: HealthBar;
  private shieldBar: ShieldBar;

  private displayIcons: (
    | EscapeLadderButton
    | MetalDetectorButton
    | KeyIcon
    | CoinIcon
  )[] = [];
  private displayRelics: LivingShieldIcon[] = [];

  constructor() {
    super();
    this.escapeLadderButton = new EscapeLadderButton(0, 0);
    this.metalDetectorButton = new MetalDetectorButton(0, 0);
    this.keyIcon = new KeyIcon(0, 0);
    this.coinIcon = new CoinIcon(0, 0);
    this.healthBar = new HealthBar(0, 0, this.maxHealth);
    this.shieldBar = new ShieldBar(0, 0, this.shield);
  }

  public initialize(engine: ex.Engine) {
    this.isInit = true;

    this.healthBar.setPos(
      ex.vec(engine.halfDrawWidth, (engine.halfDrawHeight * 7) / 4)
    );

    this.shieldBar.setPos(
      ex.vec(
        engine.halfDrawWidth,
        (engine.halfDrawHeight * 7) / 4 - INVENTORY_ITEM_SPACING + 20
      )
    );

    setTimeout(() => {
      engine.add(this.healthBar);
      engine.add(this.shieldBar);
    }, INVENTORY_ITEM_PLACEMENT_MS);
  }

  public getIsInitialized(): boolean {
    return this.isInit;
  }

  private setInventoryIconPositions(): void {
    this.displayIcons.forEach((icon, i) => {
      icon.setPos(
        INVENTORY_ITEM_OFFSET + INVENTORY_ITEM_SPACING * i,
        INVENTORY_ITEM_OFFSET
      );
    });
  }

  private setRelicIconPositions(): void {
    this.displayRelics.forEach((icon, i) => {
      icon.setPos(
        INVENTORY_ITEM_OFFSET + INVENTORY_ITEM_SPACING * i,
        INVENTORY_ITEM_OFFSET + INVENTORY_ITEM_SPACING
      );
    });
  }

  public addCoins(engine: ex.Engine, value: number): void {
    this.coins += value;
    this.coinIcon.setValue(this.coins);

    const hasCoinsIcon = this.displayIcons.find(
      (icon) => icon === this.coinIcon
    );

    if (!hasCoinsIcon) {
      this.displayIcons.push(this.coinIcon);
      this.setInventoryIconPositions();
      setTimeout(() => {
        engine.add(this.coinIcon);
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public getCoins(): number {
    return this.coins;
  }

  public useCoins(engine: ex.Engine, value: number): void {
    this.coins -= value;
    this.coinIcon.setValue(this.coins);

    if (this.coins <= 0) {
      engine.remove(this.coinIcon);
      setTimeout(() => {
        this.displayIcons.splice(
          this.displayIcons.findIndex((icon) => icon === this.coinIcon),
          1
        );
        this.setInventoryIconPositions();
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public getCoinIcon(): CoinIcon | undefined {
    return this.coins ? this.coinIcon : undefined;
  }

  public gainHealth(value: number): void {
    if (this.health === this.maxHealth) return;

    this.health += value;
    this.healthBar.setCurrHearts(this.health);
  }

  public takeDamage(engine: ex.Engine, value: number): void {
    if (this.shield > 0) {
      Resources.sounds.block.play();
      this.shield--;
      this.shieldBar.setCurrShields(this.shield);
    } else {
      this.health -= value;
      this.healthBar.setCurrHearts(this.health);

      if (this.health <= 0) {
        this.handleNoHealth(engine);
        return;
      }
      Resources.sounds.hurt.play(HURT_VOLUME);
    }
  }

  private handleNoHealth(engine: ex.Engine): void {
    const extraLifeRelicIndex = this.displayRelics.findIndex(
      (relic) => relic instanceof ExtraLifeIcon
    );

    if (extraLifeRelicIndex !== -1) {
      Resources.sounds.heal.play(HEAL_VOLUME);
      this.gainHealth(this.maxHealth - this.health);

      engine.remove(this.displayRelics[extraLifeRelicIndex]);
      setTimeout(() => {
        this.displayRelics.splice(extraLifeRelicIndex, 1);
        this.setRelicIconPositions();
      }, INVENTORY_ITEM_PLACEMENT_MS);
      return;
    }

    Resources.sounds.hurt.play(HURT_VOLUME);
    const event = new PlayerDieEvent();
    engine.emit(event.type, event);
  }

  public getHealthBar(): HealthBar {
    return this.healthBar;
  }

  public useLadder(engine: ex.Engine): void {
    this.numEscapeLadders--;

    if (this.numEscapeLadders === 0) {
      engine.remove(this.escapeLadderButton);
      setTimeout(() => {
        this.displayIcons.splice(
          this.displayIcons.findIndex(
            (icon) => icon === this.escapeLadderButton
          ),
          1
        );
        this.setInventoryIconPositions();
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public addEscapeLadder(engine: ex.Engine): void {
    this.numEscapeLadders++;

    this.escapeLadderButton.setValue(this.numEscapeLadders);

    if (this.numEscapeLadders === 1) {
      this.displayIcons.push(this.escapeLadderButton);
      this.setInventoryIconPositions();
      setTimeout(() => {
        engine.add(this.escapeLadderButton);
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public getEscapeLadderButton(): EscapeLadderButton | undefined {
    return this.numEscapeLadders ? this.escapeLadderButton : undefined;
  }

  public useMetalDetector(engine: ex.Engine): void {
    this.numMetalDetectors--;

    if (this.numMetalDetectors === 0) {
      engine.remove(this.metalDetectorButton);
      setTimeout(() => {
        this.displayIcons.splice(
          this.displayIcons.findIndex(
            (icon) => icon === this.metalDetectorButton
          ),
          1
        );
        this.setInventoryIconPositions();
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public addMetalDetector(engine: ex.Engine): void {
    this.numMetalDetectors++;

    this.metalDetectorButton.setValue(this.numMetalDetectors);

    if (this.numMetalDetectors === 1) {
      this.displayIcons.push(this.metalDetectorButton);
      this.setInventoryIconPositions();
      setTimeout(() => {
        engine.add(this.metalDetectorButton);
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public getMetalDetectorButton(): MetalDetectorButton | undefined {
    return this.numMetalDetectors ? this.metalDetectorButton : undefined;
  }

  public addShield(): void {
    this.shield += 1;
    this.shieldBar.setCurrShields(this.shield);
  }

  public getShieldBar(): ShieldBar {
    return this.shieldBar;
  }

  public addKey(engine: ex.Engine): void {
    this.numKeys++;

    this.keyIcon.setValue(this.numKeys);

    if (this.numKeys === 1) {
      this.displayIcons.push(this.keyIcon);
      this.setInventoryIconPositions();
      setTimeout(() => {
        engine.add(this.keyIcon);
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public getKeyIcon(): KeyIcon | undefined {
    return this.numKeys ? this.keyIcon : undefined;
  }

  public hasKey(): boolean {
    const hasLockpickRelic = this.displayRelics.findIndex(
      (relic) => relic instanceof LockPickIcon
    );

    return hasLockpickRelic >= 0 || this.numKeys > 0;
  }

  private useKey(engine: ex.Engine): void {
    this.numKeys--;

    if (this.numKeys === 0) {
      engine.remove(this.keyIcon);
      setTimeout(() => {
        this.displayIcons.splice(
          this.displayIcons.findIndex((icon) => icon === this.keyIcon),
          1
        );
        this.setInventoryIconPositions();
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public unlockDoor(engine: ex.Engine): void {
    const hasLockpickRelic = this.displayRelics.findIndex(
      (relic) => relic instanceof LockPickIcon
    );

    if (hasLockpickRelic >= 0) return;
    this.useKey(engine);
  }

  private getRelicIconClass(relic: Relic) {
    switch (relic) {
      case "livingshield":
        return LivingShieldIcon;
      case "dooropener":
        return DoorOpenerIcon;
      case "piggybank":
        return PiggyBankIcon;
      case "deathgrip":
        return DeathGripIcon;
      case "spyglass":
        return SpyglassIcon;
      case "extralife":
        return ExtraLifeIcon;
      case "lockpick":
        return LockPickIcon;
      default:
        return LivingShieldIcon;
    }
  }

  public addRelic(engine: ex.Engine, relic: Relic): void {
    const IconClass = this.getRelicIconClass(relic);
    const relicIcon = new IconClass(0, 0);

    this.displayRelics.push(relicIcon);
    this.setRelicIconPositions();
    setTimeout(() => {
      engine.add(relicIcon);
    }, INVENTORY_ITEM_PLACEMENT_MS);
  }

  public getRelicIcons() {
    return this.displayRelics;
  }
}
