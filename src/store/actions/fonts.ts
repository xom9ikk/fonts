import { createAction } from 'redux-actions';

enum Type {
  SET_FONT_LIST = 'FONTS/SET_FONT_LIST',
}

const setFontList = createAction(
  Type.SET_FONT_LIST,
  (payload: Object) => payload,
);

export const FontsActions = {
  Type,
  setFontList,
};
