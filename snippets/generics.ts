function identity<T>(foo: T): T {
	return foo;
}

const muggle = identity("Vernon Dursley");
const muggles = identity(["Vernon Dursely", "Petunia Dursley"]);
const number = identity(42);

type Person = { name: string; clothes: string[] };
type Elf = { name: string; master: string };

type SpellCaster<T> = T & { spells: string[] };

type Wizard = SpellCaster<Person>;
type HouseElf = SpellCaster<Elf>;
