type WizardingWorld = {
  people: Person[];
  elves: Elf[];
};

type People = WizardingWorld['people'];
type People = Person[];

function getCitizen<T extends keyof WizardingWorld>(
  world: WizardingWorld,
  key: T,
): WizardingWorld[T] {
  return world[key];
}
