type Person = { name: string; wand: string };
type Elf = { name: string; master: Person };

type SpellCaster<T extends Person> = T & { spells: Function[] };
type Wizard = SpellCaster<Person>;
type HouseElf = SpellCaster<Elf>;
type MagicCarpet = SpellCaster<string>;

export {};
