type Wizard = {name: string; spells: string[]};
type Muggle = {name: string};
type Person = Wizard | Muggle;

function sayMyName(person: Person) {
  // Shared property makes this a "discriminated union"
  return person.name;
}

function isWizard(person: Person): person is Wizard {
  // Runtime type assertion
  return 'spells' in person;
}
