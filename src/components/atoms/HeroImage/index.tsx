import React, { useMemo } from 'react';

type Props = {
  imageSrc: string;
};

const HeroImage = ({ imageSrc }) => {
  const image = useMemo(() => <img src={imageSrc} />, []);
  return <section className="max-w-7xl mx-auto">{image}</section>;
};

export default HeroImage;
