type Person = {
  name: string;
};

type Elf = {
  name: string;
};

const harry: Person = {name: 'Harry Potter'};
const dobby: Elf = {name: 'Dobby'};

function getPersonName(person: Person) {
  return person.name;
}

// No Errors
getPersonName(harry);
getPersonName(dobby);
