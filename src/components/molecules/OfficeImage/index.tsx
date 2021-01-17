import React, { useContext } from 'react';
import { DataContext } from 'providers/data';
type Props = {
  title: string;
  imageId: string;
  cityId: string;
  onClickHandler: (c: string) => void;
  active: boolean;
};
const OfficeImage = ({
  title,
  imageId,
  cityId,
  onClickHandler,
  active,
}: Props) => {
  const { data } = useContext(DataContext);

  return (
    <div
      className={`rounded-md relative mx-4 mb-4 cursor-pointer md:w-3/6 ${
        active ? 'ring-4 ring-indigo-400 ring-opacity-50' : ''
      }`}
      onClick={() => onClickHandler(cityId)}
    >
      <img
        src={data?.assets[imageId].file.url}
        alt={data?.assets[imageId].title}
        className="object-fill rounded-md w-full h-60"
        lazy-load="true"
      />
      <div
        className={`absolute w-full h-full bg-opacity-50 ${
          active ? 'bg-gray-500' : 'bg-gray-600'
        } top-0 right-0 left-0 bottom-0 flex items-end p-10 hover:py-12 transition-transform duration-500 rounded-md`}
      >
        <h2 className="text-white text-2xl text-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default OfficeImage;
