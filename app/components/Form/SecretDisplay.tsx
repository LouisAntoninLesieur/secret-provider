import { SecretDisplayProps } from "@/app/types/interfaces";

const SecretDisplay = ({ secret }: SecretDisplayProps) => {
  
  return (
    <div className='flex flex-col w-full sm:w-1/2 rounded mb-2'>
      {secret && 
        <div className="font-bold p-2 border border-white rounded break-words selection:bg-green-300 selection:text-black">{secret}</div>
      }
    </div>
  );
}

export default SecretDisplay;