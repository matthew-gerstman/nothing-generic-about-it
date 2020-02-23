type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type FileSubset = Pick<File, 'name' | 'size'>;
type FileSubset = {
  name: string;
  size: number;
};
