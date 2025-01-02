import React from 'react';
import SecretForm from '../components/SecretForm';

const GenerateSecretPage = () => {
  return (
    <>
      <div className="text-6xl font-bold text-center w-1/3 mx-auto bg-clip-text text-transparent bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neutral-600 via-green-50 to-green-50 m-4">
        Generate a random secret, given a number of bytes
      </div>
      <SecretForm />
    </>
  );
};

export default GenerateSecretPage;