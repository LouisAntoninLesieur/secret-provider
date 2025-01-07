export interface InputFieldProps {
  values: number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface HomeListItemProps {
  title: string;
  link: string;
}

export type Bytes = {
  bytes: number;
}

export type Secret = {
  secret: string;
}