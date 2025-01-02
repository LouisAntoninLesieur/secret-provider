import { ChangeEvent } from "react";

const InputField = ({ value, onChange }: { value: number, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <div className='flex items-center border border-white p-2 rounded'>
    <input type="number" placeholder="Number of bytes" value={value} onChange={onChange} className='mr-2 w-16 bg-transparent' />
  </div>
);

export default InputField;