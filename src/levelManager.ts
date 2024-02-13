import * as ex from "excalibur";
import { Level1 } from "./scenes/levels/level1";
import { WinMenu } from "./scenes/winMenu";
import { Player } from "./player";
import { Level2 } from "./scenes/levels/level2";
import { Level3 } from "./scenes/levels/level3";
import { Level4 } from "./scenes/levels/level4";
import { Level5 } from "./scenes/levels/level5";
import { SCENE_TRANSITION_DURATION } from "./constants";
import { LevelOptions } from "./scenes/levels/level";

export class LevelManager extends ex.Actor {
  private level: number = 0;
  private winThreshold: number = 5;
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
      default:
        return Level1;
    }
  }

  private createLevel(engine: ex.Engine, label: string) {
    const LevelClass = this.getCurrentLevelClass();

    const options: LevelOptions = {
      escapeLadderButton: this.player.getEscapeLadderButton(),
      keyIcon: this.player.getKeyIcon(),
      healthBar: this.player.getHealthBar(),
    };

    const level = new LevelClass(options);

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
}
