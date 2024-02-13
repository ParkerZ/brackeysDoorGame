import * as ex from "excalibur";
import { EscapeLadderButton } from "./inventoryItems/escapeLadderButton";
import { KeyIcon } from "./inventoryItems/keyIcon";
import {
  INVENTORY_ITEM_OFFSET,
  INVENTORY_ITEM_PLACEMENT_MS,
  INVENTORY_ITEM_SPACING,
} from "./constants";
import { HealthBar } from "./inventoryItems/healthBar";

export class Player extends ex.Actor {
  private isInit = false;

  private health: number = 3;
  private coins: number = 0;
  private shield: number = 0;
  private numKeys: number = 0;
  private numEscapeLadders: number = 0;

  // TODO: these don't need undefined?
  private escapeLadderButton: EscapeLadderButton | undefined;
  private keyIcon: KeyIcon | undefined;
  private healthBar: HealthBar;

  constructor() {
    super();
    this.escapeLadderButton = new EscapeLadderButton(0, 0);
    this.keyIcon = new KeyIcon(0, 0);
    this.healthBar = new HealthBar(0, 0, this.health);

    // TODO: create coins tracker - mimic key and ladder
    // TODO: create shield tracker - mimic health
  }

  public initialize(engine: ex.Engine) {
    this.isInit = true;

    this.healthBar.setPos(
      ex.vec(engine.halfDrawWidth, (engine.halfDrawHeight * 7) / 4)
    );

    console.log("health bar", this.healthBar.pos);

    setTimeout(() => {
      engine.add(this.healthBar);
    }, INVENTORY_ITEM_PLACEMENT_MS);
  }

  public getIsInitialized(): boolean {
    return this.isInit;
  }

  private setInventoryIconPositions(): void {
    if (!this.keyIcon || !this.escapeLadderButton) {
      return;
    }

    if (this.numKeys === 0 && this.numEscapeLadders !== 0) {
      console.log("ORDERING LADDERS FIRST");

      this.keyIcon.setPos(
        ex.vec(
          INVENTORY_ITEM_OFFSET + INVENTORY_ITEM_SPACING,
          INVENTORY_ITEM_OFFSET
        )
      );
      this.escapeLadderButton.setPos(
        ex.vec(INVENTORY_ITEM_OFFSET, INVENTORY_ITEM_OFFSET)
      );
      return;
    }

    if (this.numKeys !== 0 && this.numEscapeLadders === 0) {
      console.log("ORDERING KEYS FIRST");
      this.keyIcon.setPos(ex.vec(INVENTORY_ITEM_OFFSET, INVENTORY_ITEM_OFFSET));
      this.escapeLadderButton.setPos(
        ex.vec(
          INVENTORY_ITEM_OFFSET + INVENTORY_ITEM_SPACING,
          INVENTORY_ITEM_OFFSET
        )
      );
      return;
    }
  }

  public addCoins(value: number): void {
    this.coins += value;
    console.log("coins:", this.coins);
  }

  public gainHealth(value: number): void {
    this.health += value;
    console.log("hp:", this.health);
  }

  public takeDamage(value: number): void {
    if (this.shield > 0) {
      this.shield--;
    } else {
      this.health -= value;
      this.healthBar.setCurrHearts(this.health);
    }
    console.log("hp:", this.health, "shield:", this.shield);
  }

  public getHealthBar(): HealthBar {
    return this.healthBar;
  }

  public useLadder(engine: ex.Engine): void {
    this.numEscapeLadders--;

    if (this.numEscapeLadders === 0 && this.escapeLadderButton) {
      engine.remove(this.escapeLadderButton);
      setTimeout(() => {
        this.setInventoryIconPositions();
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public addEscapeLadder(engine: ex.Engine): void {
    if (!this.escapeLadderButton) {
      return;
    }

    this.numEscapeLadders++;
    console.log("numladders", this.numEscapeLadders);

    this.escapeLadderButton.setNumLadders(this.numEscapeLadders);

    if (this.numEscapeLadders === 1) {
      this.setInventoryIconPositions();
      setTimeout(() => {
        if (this.escapeLadderButton) engine.add(this.escapeLadderButton);
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public getEscapeLadderButton(): EscapeLadderButton | undefined {
    return this.numEscapeLadders ? this.escapeLadderButton : undefined;
  }

  public addShield(): void {
    this.shield += 1;
    console.log("shield:", this.shield);
  }

  public addKey(engine: ex.Engine): void {
    if (!this.keyIcon) {
      return;
    }

    this.numKeys++;
    console.log("keys:", this.numKeys);

    this.keyIcon.setNumKeys(this.numKeys);

    if (this.numKeys === 1) {
      this.setInventoryIconPositions();
      setTimeout(() => {
        if (this.keyIcon) engine.add(this.keyIcon);
      }, INVENTORY_ITEM_PLACEMENT_MS);
    }
  }

  public getKeyIcon(): KeyIcon | undefined {
    return this.numKeys ? this.keyIcon : undefined;
  }
}
