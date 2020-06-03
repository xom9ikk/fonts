import { handleActions } from 'redux-actions';
import { FontListActions } from '../actions';

const initialState = {};

export const FontListReducer = handleActions<Object, Object>({
  [FontListActions.Type.SET_FONT_LIST]:
        (state, action) => (action.payload),
}, initialState);
