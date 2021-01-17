import React, { useContext } from 'react';
import styled from 'styled-components';
import HeroImage from 'components/atoms/HeroImage';
import { DataContext } from 'providers/data';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import ErrorMessage from 'components/molecules/ErrorMessage';
import CityImageSection from 'components/organisms/CityImageSection';
import PersonCard from 'components/molecules/PersonCard';

const AboutUs = () => {
  const { data, error, isLoading } = useContext(DataContext);

  const renderPeople = () =>
    data?.people.map((p) => <PersonCard key={p.name} person={p} />);

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
      <HeroImage imageId={data?.page?.hero?.sys?.id || ''} />
      <TextContainer className="container w-4/6 mx-auto bg-white relative rounded-md px-12">
        <div className="py-8 bg-white">
          <h1 className="text-6xl pb-6 font-bold">Join us. Be You</h1>
          <p className="text-lg  pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dolorem neque libero, iusto iste maxime sunt consequuntur deserunt
            quasi provident maiores ipsam odio. Tenetur omnis consequuntur odit
            adipisci, libero quis.
          </p>
          <h2 className="text-4xl py-4 font-semibold">Some Title</h2>
          <p className="text-lg pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dolorem neque libero, iusto iste maxime sunt consequuntur deserunt
            quasi provident maiores ipsam odio. Tenetur omnis consequuntur odit
            adipisci, libero quis.
          </p>
        </div>
      </TextContainer>
      <CityImageSection
        cities={data?.city ?? []}
        onClickHandler={() => console.log('click')}
      />
      <div className="container w-5/6 mx-auto px-12 pb-12 flex flex-row flex-wrap justify-evenly">
        {renderPeople()}
      </div>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: -50px;
`;

export default AboutUs;
