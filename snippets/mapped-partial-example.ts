type File = {
  name: string;
  size: number;
  permissions: string[];
};

type PartialFile = Partial<File>;
type PartialFile = {
  name?: string;
  size?: number;
  permissions?: string[];
};
