type Diff<T, U> = T extends U ? never : T; // Remove types from T that are assignable to U

type Foo = string | number;
type Bar = string | number | Function;

type Baz = Diff<Bar, Foo>; // Function
type Blarg = Diff<Foo, Bar>; // never

type Filter<T, U> = T extends U ? T : never; // Remove types from T that are not assignable to U
type FBaz = Filter<Bar, Foo>; // string | number
type FBlarg = Filter<Foo, Bar>; // string | number

export {};
