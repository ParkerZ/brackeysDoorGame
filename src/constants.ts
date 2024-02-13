import * as ex from "excalibur";

export const SCENE_TRANSITION_DURATION = 250;

export const INVENTORY_ITEM_OFFSET = 20;
export const INVENTORY_ITEM_SPACING = 60;
export const INVENTORY_ITEM_PLACEMENT_MS = 25;

export const DOOR_WIDTH = 100;
export const DOOR_WIDTH_WITH_MARGIN = 150;

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
];
