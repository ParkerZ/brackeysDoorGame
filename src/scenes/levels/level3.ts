import * as ex from "excalibur";
import { Level, LevelOptions } from "./level";
import { StairsNextLevel } from "../../doorContents/stairsNextLevel";
import { Door } from "../../door";
import { Coin1 } from "../../doorContents/items/coin/coin1";
import { ShopDoor } from "../../doorContents/shopDoor";

export class Level3 extends Level {
  constructor(options: LevelOptions) {
    const doors = [
      new Door(StairsNextLevel),
      new Door(Coin1),
      new Door(ShopDoor),
    ];
    super(doors, 3, options);
  }

  onInitialize(engine: ex.Engine) {
    super.onInitialize(engine);
  }
}
