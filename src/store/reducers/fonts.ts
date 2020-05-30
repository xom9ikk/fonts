import { handleActions } from 'redux-actions';
import { FontsActions } from '../actions';

const initialState = {};

export const FontsReducer = handleActions<Object, Object>({
  [FontsActions.Type.SET_FONT_LIST]:
        (state, action) => (action.payload),
}, initialState);
