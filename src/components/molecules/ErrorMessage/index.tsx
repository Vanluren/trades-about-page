import React from 'react';

type Props = {
  message: string;
  status?: number;
};

const ErrorMessage = ({ message, status }: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-3/6">
        <h1 className="text-5xl font-semibold">{status ?? 'Error'}</h1>
        <h2 className="text-xl">{message}</h2>
      </div>
    </div>
  );
};

export default ErrorMessage;
