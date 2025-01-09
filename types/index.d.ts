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

export type InputProps = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required: boolean;
  className: string;
}

export type SubmitButtonProps = {
  name: string;
  className: string;
}