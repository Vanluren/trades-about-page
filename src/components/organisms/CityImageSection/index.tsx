import React from 'react';
import OfficeImage from 'components/molecules/OfficeImage';
import { City } from 'types';

type Props = {
  cities: City[];
  onClickHandler: () => void;
};

const CityImageSection = ({ cities, onClickHandler }: Props) => {
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
    <div className="container w-5/6 mx-auto bg-white relative rounded-sm px-12 pb-12">
      <div className="w-full flex flex-row justify-around items-center ">
        {renderCities()}
      </div>
    </div>
  );
};

export default CityImageSection;
