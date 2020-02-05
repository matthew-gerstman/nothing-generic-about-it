type GetComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

type WizardComponent = React.FC<{name: string}>;

type WizardProps = GetComponentProps<WizardComponent>; // {name: string}
