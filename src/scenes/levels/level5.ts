import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { Enemy1 } from "../../doorContents/enemy/enemy1";
import { Shield } from "../../doorContents/items/shield";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doorContents/items/healthPotion";
import { LevelOptions } from "../gameScene";
import { DisplayText } from "../../ui/displayText";

export class Level5 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(selectRandom([Coin1, HealthPotion])),
      new Door(Enemy1),
      new Door(selectRandom([Shield, HealthPotion])),
      new Door(),
    ];
    super(doors, 5, options);
  }

  onInitialize(engine: ex.Engine) {
    const text = new DisplayText(
      0,
      0,
      'They say "When one door closes, another one opens."\n---\nPray the opposite isn\'t true.'
    );
    text.setPos(engine.halfDrawWidth, engine.halfDrawHeight - 120);
    engine.add(text);

    super.onInitialize(engine);
  }
}
