export type EventType =
  | "loadnextlevel"
  | "loadfirstlevel"
  | "gethealthpotion"
  | "getescapeladder"
  | "getshield"
  | "getkey"
  | "addcoins"
  | "takedamage"
  | "useescapeladder";

export class LoadNextLevelEvent {
  public type: EventType = "loadnextlevel";

  constructor() {}
}

export class LoadFirstLevelEvent {
  public type: EventType = "loadfirstlevel";

  constructor() {}
}

export class GetHealthPotionEvent {
  public type: EventType = "gethealthpotion";

  constructor() {}
}

export class GetEscapeLadderEvent {
  public type: EventType = "getescapeladder";

  constructor() {}
}

export class GetShieldEvent {
  public type: EventType = "getshield";

  constructor() {}
}

export class GetKeyEvent {
  public type: EventType = "getkey";

  constructor() {}
}

export class AddCoinsEvent {
  public numCoins;
  public type: EventType = "addcoins";

  constructor(numCoins: number) {
    this.numCoins = numCoins;
  }
}

export class TakeDamageEvent {
  public damage;
  public type: EventType = "takedamage";

  constructor(damage: number) {
    this.damage = damage;
  }
}

export class UseEscapeLadderEvent {
  public type: EventType = "useescapeladder";

  constructor() {}
}
