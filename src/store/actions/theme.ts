import { createAction } from 'redux-actions';
import { EnumTheme } from '../../types';

enum Type {
  SET_THEME = 'THEME/SET_THEME',
}

const setTheme = createAction(
  Type.SET_THEME,
  (payload: EnumTheme) => payload,
);

export const ThemeActions = {
  Type,
  setTheme,
};
