import { SubmitButtonProps } from '../../../types/index';

export const SubmitButton = ({ name, className }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className={className}
    >
      {name}
    </button>
  );
}