type Person = {name: string; clothes: string[]};
type Elf = {name: string; master: Person};

type SpellCaster<T> = T & {spells: string[]};

type Wizard = SpellCaster<Person>;
type HouseElf = SpellCaster<Elf>;

type Wizard = {spells: string[]} & Person;
type HouseElf = {spells: string[]} & Elf;

type Wizard = {spells: string[]; name: string; clothes: string[]};
type HouseElf = {spells: string[]; name: string; master: Person};
