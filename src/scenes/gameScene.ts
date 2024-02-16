import * as ex from "excalibur";
import { HealthBar } from "../ui/statusBars/healthBar";
import { ShieldBar } from "../ui/statusBars/shieldBar";
import { EscapeLadderButton } from "../ui/icons/items/escapeLadderButton";
import { MetalDetectorButton } from "../ui/icons/items/metalDetectorButton";
import { KeyIcon } from "../ui/icons/items/keyIcon";
import { CoinIcon } from "../ui/icons/items/coinIcon";
import { LivingShieldIcon } from "../ui/icons/relics/livingShieldIcon";
import { DoorOpenerIcon } from "../ui/icons/relics/doorOpenerIcon";
import { MenuBackground } from "../menuBackground";
import { RelicIcon } from "../ui/icons/relics/relicIcon";

export type LevelOptions = {
  healthBar: HealthBar;
  shieldBar: ShieldBar;
  playerHasKey: boolean;
  escapeLadderButton?: EscapeLadderButton;
  metalDetectorButton?: MetalDetectorButton;
  keyIcon?: KeyIcon;
  coinIcon?: CoinIcon;
  relicIcons: (LivingShieldIcon | DoorOpenerIcon)[];
};

export class GameScene extends ex.Scene {
  private sprite: ex.Sprite;

  protected escapeLadderButton: EscapeLadderButton | undefined;
  protected metalDetectorButton: MetalDetectorButton | undefined;
  protected keyIcon: KeyIcon | undefined;
  protected playerHasKey: boolean;
  protected coinIcon: CoinIcon | undefined;
  protected healthBar: HealthBar;
  protected shieldBar: ShieldBar;
  protected relicIcons: LivingShieldIcon[];

  constructor(options: LevelOptions, sprite: ex.Sprite) {
    super();

    this.sprite = sprite;

    this.escapeLadderButton = options?.escapeLadderButton;
    this.metalDetectorButton = options?.metalDetectorButton;
    this.playerHasKey = options.playerHasKey;
    this.keyIcon = options?.keyIcon;
    this.coinIcon = options?.coinIcon;
    this.healthBar = options.healthBar;
    this.shieldBar = options.shieldBar;
    this.relicIcons = options.relicIcons;
  }

  onInitialize(engine: ex.Engine): void {
    const bg = new MenuBackground(this.sprite);
    engine.add(bg);

    this.relicIcons.forEach((icon) => {
      engine.add(icon);
    });

    engine.add(this.healthBar);
    engine.add(this.shieldBar);

    if (this.escapeLadderButton) {
      engine.add(this.escapeLadderButton);
    }

    if (this.metalDetectorButton) {
      engine.add(this.metalDetectorButton);
    }

    if (this.keyIcon) {
      engine.add(this.keyIcon);
    }

    if (this.coinIcon) {
      engine.add(this.coinIcon);
    }
  }
}
