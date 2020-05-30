import { combineReducers } from 'redux';
import { IRootState } from './state';
import { PaletteReducer } from './palette';
import { ThemeReducer } from './theme';

export const rootReducer = combineReducers<IRootState>({
  palette: PaletteReducer as any,
  theme: ThemeReducer as any,
});
