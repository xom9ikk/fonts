import { fontType, fontWeight, IFont } from '../types';

const random = (min: number, max: number) => Math.floor(
  Math.random() * (Math.floor(max) - Math.ceil(min) + 1),
) + Math.ceil(min);

const isAny = (need?: string) => !need || need === 'any';

const getRandomType = () => {
  const fontTypeKeys = Object.keys(fontType);
  const typeIndex = random(0, fontTypeKeys.length - 1);
  // @ts-ignore
  return [fontType[fontTypeKeys[typeIndex]], fontTypeKeys[typeIndex]];
};

const getFontsByType = (fontList: Object, needType?: string) => {
  const randomType = getRandomType();
  let [type] = randomType;
  const [, typeName] = randomType;
  if (!isAny(needType)) {
    type = needType?.toLowerCase();
  }
  // @ts-ignore
  return [fontList[type], typeName];
};

const getFontsByWeight = (fontList: Array<any>, needWeight?: string) => {
  if (!needWeight) return fontList;
  const availableFonts = fontList.filter((font: any) => {
    // @ts-ignore
    const findWeight = fontWeight[needWeight].toString();
    return font.variants.includes(findWeight);
  });
  return availableFonts.length ? availableFonts : fontList;
};

const getRandomFont = (fontList: Array<any>) => {
  const fontIndex = random(0, fontList.length - 1);
  return fontList[fontIndex];
};

const getRandomVariant = (font: any) => {
  const fontWeightKeys = Object.keys(fontWeight);
  const { variants } = font;
  const variantIndex = random(0, variants.length - 1);
  const randomVariant = variants[variantIndex].toString();
  // @ts-ignore
  return fontWeightKeys.filter((key) => fontWeight[key].toString() === randomVariant.replace('italic', ''))[0];
};


export const useGenerate = () => {
  const generate = (fontList: Object, needType?: string, needWeight?: string): IFont => {
    const [fontListByType, type] = getFontsByType(fontList, needType);
    const fonts = !isAny(needWeight)
      ? getFontsByWeight(fontListByType, needWeight)
      : fontListByType;
    const font = getRandomFont(fonts);
    const weight = !isAny(needWeight) ? needWeight : getRandomVariant(font);
    return {
      name: font.family,
      type,
      weight: weight || 'Regular',
    };
  };
  return {
    generate,
  };
};
