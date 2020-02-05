function (x: unknown) {
  // Type 'unknown' is not assignable to type 'number'.
  let y: number = x;
  
  // An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type.
  x++;

  // Operator '+' cannot be applied to types 'unknown' and '7'.
  x + 7

  if (typeof x === 'number') {
    y = x;
    x++;
    x + 7
  }
}