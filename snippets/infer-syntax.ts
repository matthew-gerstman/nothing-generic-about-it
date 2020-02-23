type UnrapPromise<T> = T extends Promise<infer A>
  ? A : never;

type a = Promise<string>;
type b = Promise<number>;

type x = UnrapPromise<a>; // string
type y = UnrapPromise<b>; // number
type z = UnrapPromise<string>; // never
