type GetArgs<T> = T extends (...args: infer A) => unknown ? A : never;

type foo = (a: number, b: string) => void;

type fooArgs = GetArgs<foo>; // [number, string]
