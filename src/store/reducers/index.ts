import { combineReducers } from 'redux';
import { IRootState } from './state';
import { FontsReducer } from './fonts';
import { ThemeReducer } from './theme';
import { FontListReducer } from './fontList';

export const rootReducer = combineReducers<IRootState>({
  fonts: FontsReducer as any,
  theme: ThemeReducer as any,
  fontList: FontListReducer as any,
});
