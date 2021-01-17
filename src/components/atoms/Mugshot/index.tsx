import React, { useContext } from 'react';
import { DataContext } from 'providers/data';

type Props = {
  imageId: string;
};

const Mugshot = ({ imageId }: Props) => {
  const { data } = useContext(DataContext);
  return (
    <img
      src={data?.assets[imageId].file.url}
      alt={data?.assets[imageId].title}
      className="w-24 h-24 object-fill rounded-full"
    />
  );
};

export default Mugshot;
