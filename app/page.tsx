import HomeListItem from "./components/HomeListItem";

export default function Home() {

  return (
    <section className="flex flex-col items-center">
      <div className='flex flex-col items-center p-4 mx-auto mt-20 rounded'>
        <h2 className='text-5xl text-transparent bg-clip-text bg-gradient-to-br from-slate-00 via-slate-100 to-slate-50 text-center font-bold'>JWT Secret Generator</h2>
        <p className='text-lg'>Generate a secret. We promise nobody will know.</p>
        <hr className='w-full my-4' />
        <HomeListItem title="Generate a secret now" link="/generate-secret" aria-label="Generate a secret now"/>
      </div>
    </section>
  );

}
