export const fontType = {
  'Sans-Serif': 'sans-serif',
  Serif: 'serif',
  Display: 'display',
  Handwriting: 'handwriting',
  Monospace: 'monospace',
};

export const fontWeight = {
  ExtraLight: 100,
  Light: 200,
  Demi: 300,
  Regular: 'regular',
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  ExtraBlack: 900,
};

export interface IFont {
  name: string;
  type: string;
  weight: string;
  isItalic: boolean;
}
