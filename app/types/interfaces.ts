export interface CopyButtonProps {
  secret: string;
}

export  interface InputFieldProps {
  array: number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SecretDisplayProps {
  secret: string;
}

export interface HomeListItemProps {
  title: string;
  link: string;
}

export interface GenerateSecret {
  bytes: number;
}

export interface Secret {
  secret: string;
}