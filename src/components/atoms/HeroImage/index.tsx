import React, { useMemo, useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from 'providers/data';

type Props = {
  imageId: string;
};
const HeroImage = ({ imageId }: Props) => {
  const { data } = useContext(DataContext);

  const image = useMemo(
    () => (
      <Image
        className="object-cover w-full h-96"
        src={data?.assets[imageId].file.url}
        alt={data?.assets[imageId].title}
      />
    ),
    [imageId, data]
  );

  return <section className="hero">{image}</section>;
};

const Image = styled.img`
  height: 65vh;
`;

export default HeroImage;
