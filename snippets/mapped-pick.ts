type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type TayMusic = Pick<TaylorSwift, 'albums' | 'singles'>;
type TayMusic = {
  albums: string[];
  singles: string[];
};
