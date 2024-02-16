import * as ex from "excalibur";
import { Level } from "./level";
import { StairsNextLevel } from "../../doors/contents/stairsNextLevel";
import { Door } from "../../doors/door";
import { Coin1 } from "../../doors/contents/items/coins/coin1";
import { Enemy1 } from "../../doors/contents/enemy/enemy1";
import { Shield } from "../../doors/contents/items/shield";
import { selectRandom } from "../../util";
import { HealthPotion } from "../../doors/contents/items/healthPotion";
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
