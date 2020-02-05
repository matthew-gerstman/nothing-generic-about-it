type WhatDidYouPromise<T> = T extends Promise<infer A> ? A : never;

type a = Promise<string>;
type b = Promise<number>;

type x = WhatDidYouPromise<a>; // string
type y = WhatDidYouPromise<b>; // number
type z = WhatDidYouPromise<string>; // never
