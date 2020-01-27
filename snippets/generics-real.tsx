const Component: React.FC<{someProp: string}> = ({someProp}) => {
  return <div>{someProp}</div>;
};

const promise: Promise<number> = new Promise(resolve => resolve(42));
