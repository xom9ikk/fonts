export interface IFont {
  name: string;
  type: string;
  weight: string;
}

export interface IFonts {
  currentFont: IFont;
  fonts: Array<IFont>
}
