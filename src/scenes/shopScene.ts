import * as ex from "excalibur";
import { EscapeLadderButton } from "../ui/icons/items/escapeLadderButton";
import { KeyIcon } from "../ui/icons/items/keyIcon";
import { HealthBar } from "../ui/statusBars/healthBar";
import { ShieldBar } from "../ui/statusBars/shieldBar";
import { CoinIcon } from "../ui/icons/items/coinIcon";
import { selectRandom } from "../util";
import { HealthPotion } from "../doorContents/items/healthPotion";
import { Shield } from "../doorContents/items/shield";
import { Key } from "../doorContents/items/key";
import { EscapeLadder } from "../doorContents/items/escapeLadder";
import { Coin1 } from "../doorContents/items/coin/coin1";
import { StairsNextLevel } from "../doorContents/stairsNextLevel";
import { Door } from "../door";
import {
  DOOR_WIDTH,
  DOOR_WIDTH_WITH_MARGIN,
  INVENTORY_ITEM_SPACING,
} from "../constants";
import { MenuBackground } from "../menuBackground";
import { backgroundLevelSprite } from "../resources";
import { LevelOptions } from "./levels/level";
import { Player } from "../player";
import { ShopHealthPotion } from "../doorContents/items/shopItems/shopHealthPotion";
import { ShopShield } from "../doorContents/items/shopItems/shopShield";
import { ShopKey } from "../doorContents/items/shopItems/shopKey";
import { ShopEscapeLadder } from "../doorContents/items/shopItems/shopEscapeLadder";
import { ShopLivingShieldRelic } from "../doorContents/items/shopItems/shopLivingShieldRelic";
import { ShopDoorOpenerRelic } from "../doorContents/items/shopItems/shopDoorOpenerRelic";

export class ShopScene extends ex.Scene {
  protected escapeLadderButton: EscapeLadderButton | undefined;
  protected keyIcon: KeyIcon | undefined;
  protected coinIcon: CoinIcon | undefined;
  protected healthBar: HealthBar;
  protected shieldBar: ShieldBar;
  private player: Player;

  constructor(options: LevelOptions, player: Player) {
    super();

    this.escapeLadderButton = options?.escapeLadderButton;
    this.keyIcon = options?.keyIcon;
    this.coinIcon = options?.coinIcon;
    this.healthBar = options?.healthBar;
    this.shieldBar = options?.shieldBar;

    this.player = player;
  }

  onInitialize(engine: ex.Engine) {
    const bg = new MenuBackground(backgroundLevelSprite);

    engine.add(bg);

    const shopItems = [
      selectRandom([ShopHealthPotion, ShopShield]),
      selectRandom([ShopHealthPotion, ShopShield, ShopKey, ShopEscapeLadder]),
      selectRandom([ShopLivingShieldRelic, ShopDoorOpenerRelic]),
    ];

    shopItems.forEach((ShopItem, i) => {
      const newItem = new ShopItem(this.player);
      newItem.setPos(
        engine.halfDrawWidth + (i - 2) * DOOR_WIDTH_WITH_MARGIN,
        engine.halfDrawHeight - 25
      );

      engine.add(newItem);
    });

    const door = new Door(StairsNextLevel);
    door.setPos(
      engine.halfDrawWidth + DOOR_WIDTH_WITH_MARGIN * 2,
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
}
