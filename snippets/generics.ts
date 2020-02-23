function identity<T>(foo: T): T {
  return foo;
}

const album: string = identity('Red');
const albums: string[] = identity(['1989', 'Lover']);
const number: number = identity(13);
