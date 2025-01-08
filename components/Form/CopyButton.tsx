import { useState } from "react";
import { Secret } from "../../types/index";
import { copySecret } from "../../utils/secrets/copySecret";

export const CopyButton = ({secret}: Secret) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copySecret({ secret });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    copied ? 
    <p className="flex text-green-500 font-bold p-2">
      Copied to clipboard 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </p>
  
    :
    <button type="button" className='p-2 rounded bg-slate-400 hover:bg-slate-600  active:bg-slate-950 active:text-white' onClick={handleCopy} aria-label="Copy secret to clipboard" title="Copy secret to clipboard">
      Copy this secret. Use it well.
    </button>
  );
};