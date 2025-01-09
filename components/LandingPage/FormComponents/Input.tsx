import { InputProps } from '../../../types/index'

export const Input = ({ label, type, value, onChange, placeholder, required, className }: InputProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={className}
      />
    </label>
  );
}
