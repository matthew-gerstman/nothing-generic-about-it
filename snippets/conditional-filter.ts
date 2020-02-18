type Filter<T, U> = T extends U ? T : never; // Remove types from T that ARE NOT assignable to U

type Celebrity = "Albums" | "Singles" | "Dumb Tweets";
type Taylor = "Albums" | "Singles" | "Netflix Documentaries"

type TaylorVCelebrity = Filter<Celebrity, Taylor>; // "Albums" | "Singles"
type CelebrityVTaylor = Filter<Taylor, Celebrity>; // "Albums" | "Singles"
