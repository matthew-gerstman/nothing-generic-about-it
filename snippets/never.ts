function assertExhaustive(foo: never): never {
  throw new Error('We should never get here');
}

enum Wizards {
  Harry,
  Hermione,
}

function testExhaustive(wizard: Wizards) {
  switch (wizard) {
    case Wizards.Harry:
      return 'Harry';
    case Wizards.Hermione:
      return 'Hermione';
    default:
      assertExhaustive(wizard);
  }
}
