const SecretDisplay = ({ secret }: { secret: string }) => (
  <div className='flex flex-col w-1/3 p-4 rounded'>
  {secret && 
    <div className='flex flex-col gap-2'>
      <div className="font-bold text-center">Your secret:</div> 
      <div className="text-center p-4 overflow-scroll border border-black">{secret}</div>
    </div>}
  </div>
);

export default SecretDisplay;