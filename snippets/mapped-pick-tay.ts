type TaylorSwift = {
  albums: string[];
  awards: string[];
  netflixDocumentaries: string[];
  singles: string[];
  tourDates: Date[];
};

type TayMusic = Pick<TaylorSwift, 'albums' | 'singles'>;
type TayMusic = {
  albums?: string[];
  singles?: string[];
};
