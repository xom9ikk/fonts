import { handleActions } from 'redux-actions';
import { FontsActions } from '../actions';
import { IFonts } from '../../types';

const initialState: IFonts = {
  currentFont: {
    name: 'Nunito',
    type: 'Sans-Serif',
    weight: 'Regular',
  },
  fonts: [],
};

export const FontsReducer = handleActions<IFonts, IFonts>({
  [FontsActions.Type.ADD_FONT]:
        (state, action) => ({
          ...state,
          fonts: state.currentFont
            ? [...state.fonts, state.currentFont]
            : [...state.fonts],
          currentFont: action.payload.currentFont,
        }),
  [FontsActions.Type.POP_FONT]:
        (state) => ({
          ...state,
          currentFont: state.fonts.pop() || state.currentFont,
          fonts: [...state.fonts],
        }),
}, initialState);
