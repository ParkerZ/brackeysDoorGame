import * as ex from "excalibur";
import { Level1 } from "./scenes/levels/level1";
import { WinMenu } from "./scenes/winMenu";
import { LevelOptions } from "./scenes/levels/level";
import { Level2 } from "./scenes/levels/level2";
import { Level3 } from "./scenes/levels/level3";
import { Level4 } from "./scenes/levels/level4";
import { Level5 } from "./scenes/levels/level5";
import { Level6 } from "./scenes/levels/level6";
import { Level7 } from "./scenes/levels/level7";
import { Level8 } from "./scenes/levels/level8";
import { Level9 } from "./scenes/levels/level9";
import { Level10 } from "./scenes/levels/level10";
import { Level11 } from "./scenes/levels/level11";
import { Level12 } from "./scenes/levels/level12";
import { Level13 } from "./scenes/levels/level13";
import { Level14 } from "./scenes/levels/level14";
import { Level15 } from "./scenes/levels/level15";
import { Level16 } from "./scenes/levels/level16";
import { Level17 } from "./scenes/levels/level17";
import { Level19 } from "./scenes/levels/level19";
import { Level18 } from "./scenes/levels/level18";
import { Level20 } from "./scenes/levels/level20";
import { Player } from "./player";
import { SCENE_TRANSITION_DURATION } from "./constants";
import { ShopScene } from "./scenes/shopScene";

export class LevelManager extends ex.Actor {
  private level: number = 0;
  private winThreshold: number = 20;
  private player: Player;

  constructor(player: Player) {
    super();
    this.player = player;
  }

  onInitialize(_engine: ex.Engine): void {}

  private getCurrentLevelClass() {
    switch (this.level) {
      case 1:
        return Level1;
      case 2:
        return Level2;
      case 3:
        return Level3;
      case 4:
        return Level4;
      case 5:
        return Level5;
      case 6:
        return Level6;
      case 7:
        return Level7;
      case 8:
        return Level8;
      case 9:
        return Level9;
      case 10:
        return Level10;
      case 11:
        return Level11;
      case 12:
        return Level12;
      case 13:
        return Level13;
      case 14:
        return Level14;
      case 15:
        return Level15;
      case 16:
        return Level16;
      case 17:
        return Level17;
      case 18:
        return Level18;
      case 19:
        return Level19;
      case 20:
        return Level20;
      default:
        return Level1;
    }
  }

  private buildLevelOptions(): LevelOptions {
    return {
      escapeLadderButton: this.player.getEscapeLadderButton(),
      keyIcon: this.player.getKeyIcon(),
      coinIcon: this.player.getCoinIcon(),
      healthBar: this.player.getHealthBar(),
      shieldBar: this.player.getShieldBar(),
      relicIcons: this.player.getRelicIcons(),
    };
  }

  private createLevel(engine: ex.Engine, label: string) {
    const LevelClass = this.getCurrentLevelClass();
    const level = new LevelClass(this.buildLevelOptions());

    return level;
  }

  public loadNextLevel(engine: ex.Engine): void {
    if (this.level === this.winThreshold) {
      this.loadWinMenu(engine);
      return;
    }

    const levelLabel = `L${++this.level}`;
    const level = this.createLevel(engine, levelLabel);

    console.log("loading level:", levelLabel);
    engine.add(levelLabel, {
      scene: level,
      transitions: {
        in: new ex.FadeInOut({
          duration: SCENE_TRANSITION_DURATION,
          direction: "in",
          color: ex.Color.Black,
        }),
        out: new ex.FadeInOut({
          duration: SCENE_TRANSITION_DURATION,
          direction: "out",
          color: ex.Color.Black,
        }),
      },
    });
    engine.goto(levelLabel);
  }

  private loadWinMenu(engine: ex.Engine): void {
    const winMenu = new WinMenu();
    this.level = 0;

    engine.add("win", {
      scene: winMenu,
      transitions: {
        in: new ex.FadeInOut({
          duration: SCENE_TRANSITION_DURATION,
          direction: "in",
          color: ex.Color.Black,
        }),
      },
    });
    engine.goto("win");
  }

  public loadShop(engine: ex.Engine): void {
    // TODO: don't instantiate new shop everytime
    const shopScene = new ShopScene(this.buildLevelOptions(), this.player);
    const shopLabel = `shop${this.level}`;

    engine.add(shopLabel, {
      scene: shopScene,
      transitions: {
        in: new ex.FadeInOut({
          duration: SCENE_TRANSITION_DURATION,
          direction: "in",
          color: ex.Color.Black,
        }),
        out: new ex.FadeInOut({
          duration: SCENE_TRANSITION_DURATION,
          direction: "out",
          color: ex.Color.Black,
        }),
      },
    });
    engine.goto(shopLabel);
  }
}
