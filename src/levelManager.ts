import * as ex from "excalibur";
import { Level1 } from "./scenes/levels/level1";
import { WinMenu } from "./scenes/winMenu";
import { Player } from "./player";
import { Level2 } from "./scenes/levels/level2";
import { Level3 } from "./scenes/levels/level3";
import { Level4 } from "./scenes/levels/level4";
import { Level5 } from "./scenes/levels/level5";

export class LevelManager extends ex.Actor {
  private level: number = 0;
  private winThreshold: number = 5;
  private player: Player;

  constructor() {
    super();
    this.player = new Player();
  }

  onInitialize(_engine: ex.Engine): void {}

  public getCurrentLevelClass() {
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

  public loadNextLevel(engine: ex.Engine): void {
    if (this.level === this.winThreshold) {
      this.loadWinMenu(engine);
      return;
    }

    const levelLabel = `L${++this.level}`;
    const LevelClass = this.getCurrentLevelClass();
    const level = new LevelClass();

    console.log("loading level:", levelLabel);
    engine.add(levelLabel, level);
    engine.goToScene(levelLabel);
  }

  private loadWinMenu(engine: ex.Engine): void {
    const winMenu = new WinMenu();
    this.level = 0;
    console.log("loading win");

    engine.add("win", winMenu);
    engine.goToScene("win");
  }
}
