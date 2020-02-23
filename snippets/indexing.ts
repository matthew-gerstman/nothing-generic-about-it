type ReduxState = {
  people: Person[];
  elves: Elf[];
};

type People = ReduxState['people'];
type People = Person[];

function getKeyFromReduxStore<T extends keyof ReduxState>(
  state: ReduxState,
  key: T,
): ReduxState[T] {
  return world[key];
}
