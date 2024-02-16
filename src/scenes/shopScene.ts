import * as ex from "excalibur";
import { selectRandom, shuffleArray } from "../util";
import { StairsNextLevel } from "../doors/contents/stairsNextLevel";
import { Door } from "../doors/door";
import { DOOR_WIDTH_WITH_MARGIN } from "../constants";
import { backgroundLevelSprite } from "../resources";
import { Player } from "../player";
import { ShopHealthPotion } from "../doors/contents/items/shopItems/shopHealthPotion";
import { ShopShield } from "../doors/contents/items/shopItems/shopShield";
import { ShopKey } from "../doors/contents/items/shopItems/shopKey";
import { ShopEscapeLadder } from "../doors/contents/items/shopItems/shopEscapeLadder";
import { ShopMetalDetector } from "../doors/contents/items/shopItems/shopMetalDetector";
import { GameScene, LevelOptions } from "./gameScene";
import { ShopLivingShieldRelic } from "../doors/contents/items/shopItems/relics/shopLivingShieldRelic";
import { ShopPiggyBankRelic } from "../doors/contents/items/shopItems/relics/shopPiggyBankRelic";
import { ShopDoorOpenerRelic } from "../doors/contents/items/shopItems/relics/shopDoorOpenerRelic";
import { ShopDeathGripRelic } from "../doors/contents/items/shopItems/relics/shopDeathGripRelic";
import { ShopSpyglassRelic } from "../doors/contents/items/shopItems/relics/shopSpyglassRelic";
import { ShopExtraLifeRelic } from "../doors/contents/items/shopItems/relics/shopExtraLifeRelic";
import { ShopLockPickRelic } from "../doors/contents/items/shopItems/relics/shopLockPickRelic";

export class ShopScene extends GameScene {
  private player: Player;

  constructor(options: LevelOptions, player: Player) {
    super(options, backgroundLevelSprite);

    this.player = player;
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);

    const shopItems = [
      selectRandom([ShopHealthPotion, ShopShield]),
      selectRandom([
        ShopHealthPotion,
        ShopShield,
        ShopKey,
        ShopEscapeLadder,
        ShopMetalDetector,
      ]),
    ];

    const availableRelics = this.getAvailableRelics();
    if (availableRelics && availableRelics.length) {
      shopItems.push(selectRandom(availableRelics));
    } else {
      shopItems.push(
        selectRandom([ShopKey, ShopEscapeLadder, ShopMetalDetector])
      );
    }

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
  }

  protected convertRelicToShopRelic(relic: typeof ShopLivingShieldRelic) {
    switch (relic) {
      case ShopDeathGripRelic:
        return "deathgrip";
      case ShopDoorOpenerRelic:
        return "dooropener";
      case ShopExtraLifeRelic:
        return "extralife";
      case ShopLivingShieldRelic:
        return "livingshield";
      case ShopLockPickRelic:
        return "lockpick";
      case ShopPiggyBankRelic:
        return "piggybank";
      case ShopSpyglassRelic:
        return "spyglass";
      default:
        return "deathgrip";
    }
  }

  protected getAvailableRelics() {
    const possibleRelics = [
      ShopLivingShieldRelic,
      ShopDoorOpenerRelic,
      ShopPiggyBankRelic,
      ShopDeathGripRelic,
      ShopSpyglassRelic,
      ShopExtraLifeRelic,
      ShopLockPickRelic,
    ];

    const ownedRelics = this.relicIcons.map((relic) => relic.getRelic());

    const availableRelics: (typeof ShopLivingShieldRelic)[] =
      possibleRelics.filter(
        (shopRelic) =>
          !ownedRelics.includes(this.convertRelicToShopRelic(shopRelic))
      );

    return availableRelics;
  }
}
