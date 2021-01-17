import React from 'react';
import OfficeImage from 'components/molecules/OfficeImage';
import Heading from 'components/atoms/Heading';
import { City } from 'types';

type Props = {
  cities: City[];
  onClickHandler: () => void;
  title?: string;
};

const CityImageSection = ({ cities, onClickHandler, title }: Props) => {
  const renderCities = () =>
    cities.map((c) => (
      <OfficeImage
        key={c.city}
        title={c.city}
        imageId={c.image.sys.id}
        onClickHandler={onClickHandler}
      />
    ));

  return (
    <>
      <div className="xs:invisible lg:visible container mx-auto lg:w-4/6 px-12 pb-12">
        <Heading size="md">{title}</Heading>
      </div>
      <div className="container lg:w-5/6 mx-auto bg-white relative rounded-sm px-12 pb-12">
        <div className="w-full flex flex-col ">
          <div className="flex xs:flex-col lg:flex-row justify-around items-center">
            {renderCities()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CityImageSection;
