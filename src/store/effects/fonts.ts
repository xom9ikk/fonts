import { FontListActions } from '../actions';


const fetchFontList = () => async (dispatch: Function) => {
  try {
    const response = await fetch('/fonts.json');
    const fonts = await response.json();
    dispatch(FontListActions.setFontList(fonts));
  } catch (error) {
    console.error('fetchFontList', error);
  }
};


export const FontsEffects = {
  fetchFontList,
};
