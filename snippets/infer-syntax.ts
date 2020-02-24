type UnwrapPromise<T> = T extends Promise<infer A>
  ? A : never;

type a = Promise<string>;
type b = Promise<number>;

type x = UnwrapPromise<a>; // string
type y = UnwrapPromise<b>; // number
type z = UnwrapPromise<string>; // never
