import React, { ReactElement, ReactNode } from 'react';
type Props = {
  size: 'lg' | 'md';
  children: ReactNode;
};
const Heading = ({ children, size = 'lg' }: Props): ReactElement => {
  if (size === 'lg') {
    <h1 className="text-6xl pb-6 font-bold">{children}</h1>;
  }
  return <h2 className="text-4xl py-4 font-semibold">{children}</h2>;
};

export default Heading;
