type Person = {
  name: string;
  wand: string;
};

type Elf = {
  name: string;
};

const harry: Person = {name: 'Harry Potter', wand: 'Holly and Phoenix Feather'};
const dobby: Elf = {name: 'Dobby'};

function getPersonName(person: Person) {
  return person.name;
}
// No Errors
getPersonName(harry);

// Argument of type 'Elf' is not assignable to parameter of type 'Person'.
// Property 'wand' is missing in type 'Elf' but required in type 'Person'.
getPersonName(dobby);
