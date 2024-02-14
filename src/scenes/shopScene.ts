import * as ex from "excalibur";
import { EscapeLadderButton } from "../ui/items/escapeLadderButton";
import { KeyIcon } from "../ui/items/keyIcon";
import { HealthBar } from "../ui/statusBars/healthBar";
import { ShieldBar } from "../ui/statusBars/shieldBar";
import { CoinIcon } from "../ui/items/coinIcon";
import { selectRandom } from "../util";
import { HealthPotion } from "../doorContents/items/healthPotion";
import { Shield } from "../doorContents/items/shield";
import { Key } from "../doorContents/items/key";
import { EscapeLadder } from "../doorContents/items/escapeLadder";
import { Coin1 } from "../doorContents/items/coin/coin1";
import { StairsNextLevel } from "../doorContents/stairsNextLevel";
import { Door } from "../door";
import { INVENTORY_ITEM_SPACING } from "../constants";
import { MenuBackground } from "../menuBackground";
import { backgroundLevelSprite } from "../resources";

export type LevelOptions = {
  healthBar: HealthBar;
  shieldBar: ShieldBar;
  escapeLadderButton?: EscapeLadderButton;
  keyIcon?: KeyIcon;
  coinIcon?: CoinIcon;
};

export class ShopScene extends ex.Scene {
  protected escapeLadderButton: EscapeLadderButton | undefined;
  protected keyIcon: KeyIcon | undefined;
  protected coinIcon: CoinIcon | undefined;
  protected healthBar: HealthBar;
  protected shieldBar: ShieldBar;

  constructor(options: LevelOptions) {
    super();

    this.escapeLadderButton = options?.escapeLadderButton;
    this.keyIcon = options?.keyIcon;
    this.coinIcon = options?.coinIcon;
    this.healthBar = options?.healthBar;
    this.shieldBar = options?.shieldBar;
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundLevelSprite);

    engine.add(bg);

    const shopItems = [
      selectRandom([HealthPotion, Shield]),
      selectRandom([HealthPotion, Shield, Key, EscapeLadder]),
      selectRandom([Coin1]),
    ];

    console.log("Shop Items", shopItems);

    const door = new Door(StairsNextLevel);
    door.setPos(
      engine.halfDrawWidth + INVENTORY_ITEM_SPACING * 3,
      engine.halfDrawHeight
    );

    engine.add(door);

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

  // TODO: enable, disable items based on current coin value
  // TODO: honestly, I should maybe just pass a player ref around
  public useCoins(value: number) {
    console.log("COINS USED", value);
  }
}
