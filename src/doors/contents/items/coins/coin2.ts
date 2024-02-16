import { coin2Sprite } from "../../../../resources";
import { CoinBase } from "./coinBase";

export class Coin2 extends CoinBase {
  constructor() {
    super(2, coin2Sprite);
  }
}
