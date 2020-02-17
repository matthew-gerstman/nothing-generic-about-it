type TaylorSwift = {
  albums: string[];
  awards: string[];
  netflixDocumentaries: string[];
  singles: string[];
  tourDates: Date[];
};

type Tay = Partial<TaylorSwift>;
type Tay = {
  albums?: string[];
  awards?: string[];
  netflixDocumentaries?: string[];
  singles?: string[];
  tourDates?: Date[];
};
