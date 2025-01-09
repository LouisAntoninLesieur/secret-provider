import { Bytes } from "../../types/index";

export const IndependentDisplay = ({bytes}: Bytes) => {
  return (
    <>
    <div className='font-bold m-2'>May you prefer to generate the secret yourself ? Open a terminal and run:</div>
    <div className='flex flex-col w-full sm:w-1/3 rounded mb-2'>
      {bytes && 
        <div className="bg-slate-700 p-2 border border-white rounded break-words selection:bg-green-300 selection:text-black" aria-label="Generate yourself a secret with node" title="Generate yourself a secret with node">
          node -e &quot;console.log(require(&apos;crypto&apos;).randomBytes({bytes}).toString(&apos;hex&apos;))&quot;
        </div>
      }
    </div>
    </>
  )
}