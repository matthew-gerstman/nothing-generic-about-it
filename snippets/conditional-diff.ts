type Diff<T, U> = T extends U ? never : T; // Remove types from T that ARE assignable to U

type Musician = "Albums" | "Singles";
type Taylor = "Albums" | "Singles" | "Netflix Documentaries"

type TaylorMinusMusician = Diff<Taylor, Musician>; // "Netflix Documentaries"
type MusicianMinusTaylor = Diff<Musician, Taylor>; // never

