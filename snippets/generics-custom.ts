type Person = {name: string; wand: string};
type Elf = {name: string;};

type SpellCaster<T> = T & {spells: string[]};

type Wizard = SpellCaster<Person>;
type HouseElf = SpellCaster<Elf>;

type Wizard = {spells: string[]} & Person;
type HouseElf = {spells: string[]} & Elf;

type Wizard = {spells: string[]; name: string; wand: string};
type HouseElf = {spells: string[]; name: string};
