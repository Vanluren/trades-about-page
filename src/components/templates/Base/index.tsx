import React, { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Base = ({ children }: Props): ReactElement => {
  return <div></div>;
};

export default Base;
