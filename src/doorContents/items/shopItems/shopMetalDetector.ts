import * as ex from "excalibur";
import { Player } from "../../../player";
import { ShopItem } from "./shopItem";
import { GetMetalDetectorEvent } from "../../../events";
import { metalDetectorSprite } from "../../../resources";
import { METAL_DETECTOR_TOOLTIP } from "../../../constants";

export class ShopMetalDetector extends ShopItem {
  constructor(player: Player) {
    super(
      new GetMetalDetectorEvent(),
      metalDetectorSprite,
      2,
      player,
      METAL_DETECTOR_TOOLTIP
    );
  }
}
