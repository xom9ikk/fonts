import { ThemeActions } from '../actions';
import { EnumTheme } from '../../types';


const restoreTheme = () => async (dispatch: Function) => {
  try {
    const theme = JSON.parse(localStorage.getItem('theme') || '');
    dispatch(ThemeActions.setTheme(theme));
  } catch (error) {
    console.error('restoreTheme', error);
  }
};

const saveTheme = (payload: EnumTheme) => async (dispatch: Function) => {
  try {
    localStorage.setItem('theme', JSON.stringify(payload));
    dispatch(ThemeActions.setTheme(payload));
  } catch (error) {
    console.error('saveTheme', error);
  }
};


export const ThemeEffects = {
  restoreTheme,
  saveTheme,
};
