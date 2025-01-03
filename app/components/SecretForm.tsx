'use client'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import InputField from './Form/InputField';
import GenerateButton from './Form/GenerateButton';
import CopyButton from './Form/CopyButton';
import SecretDisplay from './Form/SecretDisplay';
import generateSecret from '@/utils/generateSecret';
import IndependentPlay from './Form/IndependentPlay';

const SecretForm = () => {
  const values = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 480, 512];
  const chrono = 8000;
  const [secret, setSecret] = useState('');
  const [requiredBytes, setRequiredBytes] = useState(256);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setRequiredBytes(parseInt(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSecret(generateSecret({ bytes: requiredBytes }));
    setTimeLeft(chrono / 1000);
    setTimeout(() => setSecret(''), chrono);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-screen items-center gap-2'>
      <InputField array={values} onChange={handleChange} />
      <GenerateButton />
      {secret && <p className='font-bold'>This secret is going to expire in {timeLeft} seconds</p>}
      <SecretDisplay secret={secret} />
      <CopyButton secret={secret}/>
      <IndependentPlay bytes={requiredBytes} />
    </form>
  );
};

export default SecretForm;
