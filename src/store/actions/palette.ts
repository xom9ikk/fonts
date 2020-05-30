import { createAction } from 'redux-actions';
import {IGradient} from "../../types";

enum Type {
  ADD_COLOR = 'PALETTE/ADD_COLOR',
  POP_COLOR = 'PALETTE/POP_COLOR',
  ADD_GRADIENT = 'PALETTE/ADD_GRADIENT',
  POP_GRADIENT = 'PALETTE/POP_GRADIENT',
}

const addColor = createAction(
  Type.ADD_COLOR,
  (payload: string) => ({ currentColor: payload }),
);

const popColor = createAction(
  Type.POP_COLOR,
  () => ({}),
);

const addGradient = createAction(
  Type.ADD_GRADIENT,
  (payload: IGradient) => ({ currentGradient: payload }),
);

const popGradient = createAction(
  Type.POP_GRADIENT,
  () => ({}),
);

export const PaletteActions = {
  Type,
  addColor,
  popColor,
  addGradient,
  popGradient,
};
