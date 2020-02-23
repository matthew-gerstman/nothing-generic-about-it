type File = {
  name: string;
  size: number;
  permissions: string[];
};

type FileKeys = keyof File;
type FileKeys = "name" | "size" | "permissions";
