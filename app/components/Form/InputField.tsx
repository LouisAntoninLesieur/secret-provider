import { ChangeEvent } from "react";

const InputField = ({ value, onChange }: { value: number, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <div className='flex items-center border border-black p-2 rounded'>
    <input type="number" placeholder="Number of bytes" value={value} onChange={onChange} className='mr-2 w-16' />
  </div>
);

export default InputField;