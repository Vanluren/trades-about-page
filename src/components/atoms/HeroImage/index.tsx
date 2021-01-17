import React, { useMemo } from 'react';
import styled from 'styled-components';

type Props = {
  imageSrc: string;
  imageInfo?: {
    alt: string;
  };
};

const HeroImage = ({ imageSrc, imageInfo }: Props) => {
  const image = useMemo(
    () => (
      <Image
        className="object-cover w-full h-96"
        src={imageSrc}
        alt={imageInfo?.alt ?? 'Image'}
      />
    ),
    [imageSrc, imageInfo]
  );

  return <section className="hero">{image}</section>;
};

const Image = styled.img`
  height: 65vh;
`;

export default HeroImage;
