'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import InputField from './Form/InputField';
import GenerateButton from './Form/GenerateButton';
import SecretDisplay from './Form/SecretDisplay';
import generateSecret from '@/utils/generateSecret';

const SecretForm = () => {
  const [secret, setSecret] = useState('');
  const [requiredBytes, setRequiredBytes] = useState(32);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.value) {
      setRequiredBytes(0);
      return;
    }

    if (parseInt(e.target.value) < 0) {
      setRequiredBytes(0);
      return;
    }

    setRequiredBytes(parseInt(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newSecret = generateSecret(requiredBytes);
    setSecret(newSecret);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2 border border-white p-4 text-white bg-gray-200 bg-opacity-20 rounded mx-20'>
      <InputField value={requiredBytes} onChange={handleChange} />
      <GenerateButton />
      <SecretDisplay secret={secret} />
    </form>
  );
};

export default SecretForm;
