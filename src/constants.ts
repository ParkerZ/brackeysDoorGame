import * as ex from "excalibur";

export const SCENE_TRANSITION_DURATION = 250;

export const INVENTORY_ITEM_OFFSET = 20;
export const INVENTORY_ITEM_SPACING = 60;
export const INVENTORY_ITEM_PLACEMENT_MS = 25;

export const DOOR_WIDTH = 100;
export const DOOR_WIDTH_WITH_MARGIN = 150;

export const KEY_TOOLTIP = "Rusty Key:\nAllows you to open 1 locked door.";
export const ESCAPE_LADDER_TOOLTIP = "Escape Ladder:\nUse to ascend.";
export const SHIELD_TOOLTIP = "Shield:\nBlocks all of next attack.";
export const LIVING_SHIELD_TOOLTIP =
  "Stair Shield:\nGrants 1 shield each time you ascend.";
export const DOOR_OPENER_TOOLTIP =
  "Crowbar:\nOpens 1 random door every time you ascend.";
export const PIGGY_BANK_TOOLTIP =
  "Piggy Bank:\nReplace empty doors with coins.";
export const DEATH_GRIP_TOOLTIP =
  "Death Grip:\nReveal 1 enemy every time you ascend.";
export const SPYGLASS_TOOLTIP =
  "Spyglass:\nReveal the first door you open each floor.";

export const DOOR_LAYOUTS = [
  [ex.vec(0, 0)],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, 0),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(0, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
  ],
  [
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, 0),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(0, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, 0),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN / 2),
  ],
  [
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN / 2),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN / 2),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(0, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN / 2),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN / 2),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(0, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, 0),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, 0),
    ex.vec((-DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN / 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN / 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec((DOOR_WIDTH_WITH_MARGIN * 3) / 2, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(0, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, 0),
    ex.vec(0, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
  ],
  [
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, -DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(0, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, 0),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, 0),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(-DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(0, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN, DOOR_WIDTH_WITH_MARGIN),
    ex.vec(DOOR_WIDTH_WITH_MARGIN * 2, DOOR_WIDTH_WITH_MARGIN),
  ],
];
