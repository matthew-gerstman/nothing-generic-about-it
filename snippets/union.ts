type Wizard = { name: string; spells: string[] };
type Muggle = { name: string };
type Person = Wizard | Muggle;

function SayMyName(person: Person) {
	return person.name;
}

function isWizard(person: Person): person is Wizard {
	return "spells" in person;
}

export {};
