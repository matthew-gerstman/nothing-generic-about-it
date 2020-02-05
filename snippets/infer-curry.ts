export type DropFirstArgument<T extends Function> = T extends (
  firstArg: unknown,
  ...args: infer A
) => infer R
  ? (...args: A) => R
  : never;

type ComponentFactory = (id: number, props: {}) => React.Component;
type BoundComponent = DropFirstArgument<ComponentFactory>; // (props: {}) => Component
