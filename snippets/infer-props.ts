type GetComponentProps<T> = T extends React.ComponentType<infer P>
  ? P : never;

type TaylorComponent = React.FC<{albums: string[]}>;

type TaylorProps = GetComponentProps<TaylorComponent>;
type TaylorProps = {albums: string[]}
