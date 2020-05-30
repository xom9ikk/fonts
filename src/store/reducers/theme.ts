import { handleActions } from 'redux-actions';
import { ThemeActions } from '../actions';
import { EnumTheme } from '../../types';

const initialState = EnumTheme.Light;

export const ThemeReducer = handleActions<number, number>({
  [ThemeActions.Type.SET_THEME]:
        (state, action) => (action.payload),
}, initialState);
