export interface IGradient {
  start: string;
  end: string;
  deg: number;
}

export interface IPalette {
  currentColor: string;
  colors: Array<string>
  currentGradient: IGradient;
  gradients: Array<IGradient>;
}
