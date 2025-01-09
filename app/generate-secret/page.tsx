import React from 'react';
import { GeneratorForm } from '../../components/GeneratorForm';

const GenerateSecretPage = () => {
  return (
    <>
      <div className="text-4xl font-bold text-center w-1/2 mx-auto mb-6">
        Generate a JWT Secret
      </div>
      <GeneratorForm />
    </>
  );
};

export default GenerateSecretPage;