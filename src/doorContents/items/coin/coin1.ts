import { coinSprite } from "../../../resources";
import { CoinBase } from "./coinBase";

export class Coin1 extends CoinBase {
  constructor() {
    super(1, coinSprite);
  }
}
