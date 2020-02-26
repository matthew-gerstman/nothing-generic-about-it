type Wizard = {name: string; spells: string[]};
type Muggle = {name: string};
type Person = Wizard | Muggle;

function sayMyName(person: Person) {
  // Shared property typechecks
  return person.name;
}

function isWizard(person: Person): person is Wizard {
  // Runtime type assertion
  return 'spells' in person;
}
