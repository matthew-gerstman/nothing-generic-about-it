type x = number & never; // never
type y = string & never; // never
type z = null & never; // never

type a = number | never; // number
type b = string | never; // string
type c = null | never; // null
