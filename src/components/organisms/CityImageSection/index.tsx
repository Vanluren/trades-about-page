import React, { useCallback, useContext } from 'react';
import OfficeImage from 'components/molecules/OfficeImage';
import Heading from 'components/atoms/Heading';
import { City } from 'types';
import { DataContext } from 'providers/data';

type Props = {
  onClickHandler: (c: string) => void;
  activeCity: string | null;
};

const CityImageSection = ({ onClickHandler, activeCity }: Props) => {
  const { data } = useContext(DataContext);

  const renderCities = () =>
    data?.city.map((c) => (
      <OfficeImage
        cityId={c.id}
        key={c.city}
        title={c.city}
        imageId={c.image.sys.id}
        onClickHandler={onClickHandler}
        active={c.id === activeCity}
      />
    ));

  return (
    <>
      <div className="xs:invisible lg:visible container mx-auto lg:w-4/6 px-12 pb-12">
        <Heading size="md">{data?.page.officesTitle}</Heading>
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
