type Person = {name: string; wand: string};
type Elf = {name: string;};

type SpellCaster<T extends Person> = T & {spells: Function[]};
type Wizard = SpellCaster<Person>;

type MagicCarpet = SpellCaster<string>;
// Type 'string' does not satisfy the constraint 'Person'.

type HouseElf = SpellCaster<Elf>;
// Type 'Elf' does not satisfy the constraint 'Person'.
// Property 'wand' is missing in type 'Elf' but required in type 'Person'.
