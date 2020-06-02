import { fontType, fontWeight, IFont } from '../types';

const random = (min: number, max: number) => Math.floor(
  Math.random() * (Math.floor(max) - Math.ceil(min) + 1),
) + Math.ceil(min);

export const useGenerate = () => {
  const generate = (fontList: Object): IFont => {
    const fontTypeKeys = Object.keys(fontType);
    const fontWeightKeys = Object.keys(fontWeight);
    const typeIndex = random(0, fontTypeKeys.length - 1);
    // @ts-ignore
    const type = fontType[fontTypeKeys[typeIndex]];
    // @ts-ignore
    const fonts = fontList[type];
    const fontIndex = random(0, fonts.length - 1);
    const font = fonts[fontIndex];
    const { variants } = font;
    const variantIndex = random(0, variants.length - 1);
    // @ts-ignore
    const weight = fontWeightKeys.filter((key) => fontWeight[key].toString() === variants[variantIndex].toString().replace('italic', ''))[0];
    const isItalic = variants[variantIndex].toString().includes('italic');
    return {
      name: font.family,
      type: fontTypeKeys[typeIndex],
      weight: weight || 'Regular',
      isItalic,
    };
  };
  return {
    generate,
  };
};
