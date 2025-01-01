import React from 'react';
import SecretForm from '../components/SecretForm';

const GenerateSecretPage = () => {
  return (
    <>
      <div className="text-2xl font-bold text-center">Generate a random secret, given a number of bytes</div>
      <SecretForm />
    </>
  );
};

export default GenerateSecretPage;