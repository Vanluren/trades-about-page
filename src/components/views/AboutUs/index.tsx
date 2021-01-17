import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import HeroImage from 'components/atoms/HeroImage';
import { DataContext } from 'providers/data';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import ErrorMessage from 'components/molecules/ErrorMessage';
import CityImageSection from 'components/organisms/CityImageSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Heading from 'components/atoms/Heading';
import PersonCardGallery from 'components/organisms/PersonCardGallery';
import NavBar from 'components/molecules/NavBar';

const AboutUs = () => {
  const { data, error, isLoading } = useContext(DataContext);
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const onCityClick = (cityId: string) => {
    if (activeCity === cityId) {
      return setActiveCity(null);
    }
    return setActiveCity(cityId);
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  } else if (error !== null) {
    return (
      <ErrorMessage
        message={error.message ?? 'Something went wrong'}
        status={error.status}
      />
    );
  }
  return (
    <>
      <NavBar />
      <HeroImage imageId={data?.page.hero.sys.id || ''} />
      <TextContainer className="container lg:w-4/6 mx-auto bg-white relative rounded-md px-12">
        <div className="py-8 bg-white">
          <Heading size="lg">{data?.page.title}</Heading>
          {documentToReactComponents(data?.page.content)}
        </div>
      </TextContainer>
      <CityImageSection onClickHandler={onCityClick} activeCity={activeCity} />
      <PersonCardGallery activeCity={activeCity} />
    </>
  );
};

const TextContainer = styled.div`
  margin-top: -50px;
`;

export default AboutUs;
