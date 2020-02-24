type NumberOrNull<T> = T extends number ? number : null;

type a = NumberOrNull<number>; // number
type b = NumberOrNull<string>; // null
type c = NumberOrNull<boolean>; // null
type d = NumberOrNull<null>; // null
