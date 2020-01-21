type WizardingWorld = {
	people: Person[];
	elves: Elf[];
};

type People = WizardingWorld["people"];

function getCitizen<T extends keyof WizardingWorld>(
	world: WizardingWorld,
	key: T
): WizardingWorld[T] {
	return world[key];
}

const people = getCitizen({}, "people");
const elves = getCitizen({}, "elves");

export {};
