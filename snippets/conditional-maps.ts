type TranslatedString = {
  message: string;
  locale: string;
};

type TranslateObject<T> = {
  [P in keyof T]: T[P] extends string ? TranslatedString : T;
};

type PageData = {
  title: string;
  body: string;
  footer: string;
  numUsers: number;
  userData: Object;
};

type TranslatedPageData = TranslateObject<PageData>;
type TranslatedPageData = {
  title: TranslatedString;
  body: TranslatedString;
  footer: TranslatedString;
  numUsers: number;
  userData: Object;
};