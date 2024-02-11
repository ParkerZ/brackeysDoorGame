import * as ex from "excalibur";

export class MenuBackground extends ex.ScreenElement {
  private sprite;

  constructor(bgSprite: ex.Sprite) {
    super({
      x: 0,
      y: 0,
      z: -1,
    });

    this.sprite = bgSprite;
  }

  onInitialize(engine: ex.Engine) {
    this.graphics.use(this.sprite);
  }
}
