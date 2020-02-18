type GetArgs<T> = T extends (...args: infer A) => unknown ? A : never;

type Func = (a: number, b: string) => void;

type FuncArgs = GetArgs<Func>; // [number, string]
