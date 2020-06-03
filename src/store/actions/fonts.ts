import { createAction } from 'redux-actions';
import { IFont } from '../../types';

enum Type {
  ADD_FONT = 'FONTS/ADD_FONT',
  POP_FONT = 'FONTS/POP_FONT',
}

const addFont = createAction(
  Type.ADD_FONT,
  (payload: IFont) => ({ currentFont: payload }),
);

const popFont = createAction(
  Type.POP_FONT,
  () => ({}),
);


export const FontsActions = {
  Type,
  addFont,
  popFont,
};
