import * as ex from "excalibur";
import { Level1 } from "./scenes/levels/1";
import { Level } from "./scenes/levels/level";
import { WinMenu } from "./scenes/winMenu";

export class LevelManager {
  private level: number = 0;
  private winThreshold: number = 5;

  constructor() {}

  public getCurrentLevelClass(): typeof Level {
    switch (this.level) {
      case 1:
        return Level1;
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
