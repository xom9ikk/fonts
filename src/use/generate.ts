const random = (min: number, max: number) => Math.floor(
  Math.random() * (Math.floor(max) - Math.ceil(min) + 1),
) + Math.ceil(min);

export const useGenerate = () => {
  const generate = (fontList: Object) => {
    const variants = Object.keys(fontList);
    const variantIndex = random(0, variants.length - 1);
    const variant = variants[variantIndex];
    // @ts-ignore
    const fonts = fontList[variant];
    const fontIndex = random(0, fonts.length - 1);
    const font = fonts[fontIndex];
    return font.family;
  };
  return {
    generate,
  };
};
