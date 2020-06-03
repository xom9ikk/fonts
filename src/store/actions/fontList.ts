import { createAction } from 'redux-actions';

enum Type {
  SET_FONT_LIST = 'FONT_LIST/SET_FONT_LIST',
}

const setFontList = createAction(
  Type.SET_FONT_LIST,
  (payload: Object) => payload,
);

export const FontListActions = {
  Type,
  setFontList,
};
