type Person = {
	name: string;
};

type NoNulls<T> = T extends null ? never : T;

export {};
