type Partial<T> = {[P in keyof T]?: T[P]};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
