type Person = { name: string };
type SpellCaster = { spells: string[] };
type Wizard = Person & SpellCaster;

const person: Person = { name: "Harry Potter" };
const spellCaster: SpellCaster = { spells: ["expeliarmous"] };
const wizard: Wizard = { ...person, ...spellCaster };

export {};
