function identity<T>(foo: T): T {
  return foo;
}

const muggle: string = identity('Vernon Dursley');
const muggles: string[] = identity(['Vernon Dursely', 'Petunia Dursley']);
const number: number = identity(42);
