type ReduxState = {
  people: Person[];
  elves: Elf[];
};

type ReduxKeys = keyof ReduxState;
type ReduxKeys = 'people' | 'elves';
