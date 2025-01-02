import { InputFieldProps } from "@/app/types/interfaces";

const InputField = ({ array, onChange }: InputFieldProps) => {

  return (
    <>
      <div className="font-bold mb-2">How long would you like your secret to be ?</div>
      <div className='flex items-center border border-white p-2 rounded mb-2'>
        <select name="bytes" id="bytes" defaultValue={256} onChange={onChange} className='text-center mr-2 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'>
              {array.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
        </select>
        <p>bytes</p>
      </div>
    </>
  )  
}

export default InputField;