import {
  EnumTheme,
  IFonts,
} from '../../types';

export interface IRootState {
  fonts: IFonts,
  theme: EnumTheme,
  fontList: Object,
}
