type NumberOrNull<T> = T extends number ? number : null;

type x = NumberOrNull<number>; // number
type y = NumberOrNull<string>; // null
