type Foo<T> = T extends number ? number : null;

type x = Foo<number>; // number
type y = Foo<string>; // null
