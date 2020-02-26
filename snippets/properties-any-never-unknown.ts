type a = unknown | any; // any
type b = never | any; // any

type x = unknown & any; // any
// Never overpowers any.
type y = never & any; // never
