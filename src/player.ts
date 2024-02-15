import * as ex from "excalibur";
import { EscapeLadderButton } from "./ui/icons/items/escapeLadderButton";
import { KeyIcon } from "./ui/icons/items/keyIcon";
import {
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

export class Player extends ex.Actor {
  private isInit = false;

  private health: number = 3;
  private coins: number = 0;
  private shield: number = 0;
  private numKeys: number = 0;
  private numEscapeLadders: number = 0;

  private escapeLadderButton: EscapeLadderButton;
  private keyIcon: KeyIcon;
  private coinIcon: CoinIcon;
  private healthBar: HealthBar;
  private shieldBar: ShieldBar;

  private displayIcons: (EscapeLadderButton | KeyIcon | CoinIcon)[] = [];
  private displayRelics: LivingShieldIcon[] = [];

  constructor() {
    super();
    this.escapeLadderButton = new EscapeLadderButton(0, 0);
    this.keyIcon = new KeyIcon(0, 0);
    this.coinIcon = new CoinIcon(0, 0);
    this.healthBar = new HealthBar(0, 0, this.health);
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
        (engine.halfDrawHeight * 7) / 4 - INVENTORY_ITEM_SPACING
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

    if (this.coins === 1) {
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
    this.health += value;
    this.healthBar.setCurrHearts(this.health);
  }

  public takeDamage(value: number): void {
    if (this.shield > 0) {
      this.shield--;
      this.shieldBar.setCurrShields(this.shield);
    } else {
      this.health -= value;
      this.healthBar.setCurrHearts(this.health);
    }
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

  private getRelicIconClass(relic: Relic) {
    switch (relic) {
      case "livingshield":
        return LivingShieldIcon;
      case "dooropener":
        return DoorOpenerIcon;
      case "piggybank":
        return PiggyBankIcon;
      default:
        return LivingShieldIcon;
    }
  }

  public addRelic(engine: ex.Engine, relic: Relic): void {
    const IconClass = this.getRelicIconClass(relic);
    const relicIcon = new IconClass(0, 0);

    this.displayRelics.push(relicIcon);
    console.log("relics", this.displayRelics);
    this.setRelicIconPositions();
    setTimeout(() => {
      engine.add(relicIcon);
    }, INVENTORY_ITEM_PLACEMENT_MS);
  }

  public getRelicIcons() {
    return this.displayRelics;
  }
}
