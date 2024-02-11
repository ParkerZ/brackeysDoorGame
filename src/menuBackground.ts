import * as ex from "excalibur";

export class MenuBackground extends ex.ScreenElement {
  private sprite;

  constructor(bgSprite: ex.Sprite) {
    super({
      x: 0,
      y: -20,
    });

    this.sprite = bgSprite;
  }

  onInitialize(engine: ex.Engine) {
    const scaleX = engine.drawWidth / this.sprite.width;
    const scaleY = engine.drawHeight / this.sprite.height;
    this.sprite.scale = new ex.Vector(
      Math.max(scaleX, scaleY),
      Math.max(scaleX, scaleY)
    );
    this.graphics.use(this.sprite);
  }
}
