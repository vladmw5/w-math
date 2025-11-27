export interface ComplexLike {
  re: number;
  im: number;
}

export function createComplex(re: number, im: number = 0): ComplexLike {
  return { re, im };
}
