type File = {
  name: string;
  size: number;
  permissions: string[];
};

type PartialFile = Partial<PartialFile>;
type PartialFile = {
  name?: string;
  size?: number;
  permissions?: string[];
};
