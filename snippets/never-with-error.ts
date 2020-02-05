function assertExhaustive(foo: never): never {
  throw new Error('We should never get here');
}

enum Wizards {
  Harry,
  Hermione,
  Ron,
}

function testExhaustive(wizard: Wizards) {
  switch (wizard) {
    case Wizards.Harry:
      return 'Harry';
    case Wizards.Hermione:
      return 'Hermione';
    default:
      // Argument of type 'Wizards.Ron' is not assignable to parameter of type 'never'.
      assertExhaustive(wizard);
  }
}
