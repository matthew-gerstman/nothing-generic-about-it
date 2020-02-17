type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Tay = Partial<TaylorSwift>;
type Tay = {
  albums?: string[];
  awards?: string[];
  netflixDocumentaries?: string[];
  singles?: string[];
  tourDates?: Date[];
};
