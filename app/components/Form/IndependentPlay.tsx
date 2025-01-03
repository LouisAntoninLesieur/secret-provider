import { IndependentPlayProps } from "@/app/types/interfaces";

const IndependentPlay = ({bytes}: IndependentPlayProps) => {
  return (
    <>
    <div className='font-bold m-2'>May you prefer to generate the secret yourself ? Open a terminal and run:</div>
    <div className='flex flex-col w-full sm:w-1/3 rounded mb-2'>
      {bytes && 
        <div className="bg-slate-700 p-2 border border-white rounded break-words selection:bg-green-300 selection:text-black">
          node -e "console.log(require('crypto').randomBytes({bytes}).toString('hex'))"
        </div>
      }
    </div>
    </>
  )
}

export default IndependentPlay;