import React, { useContext } from 'react';
import styled from 'styled-components';
import HeroImage from 'components/atoms/HeroImage';
import { DataContext } from 'providers/data';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import ErrorMessage from 'components/molecules/ErrorMessage';
import CityImageSection from 'components/organisms/CityImageSection';
import PersonCard from 'components/molecules/PersonCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Heading from 'components/atoms/Heading';

const AboutUs = () => {
  const { data, error, isLoading } = useContext(DataContext);

  const renderPeople = () =>
    data?.people
      .sort((a, b) => a.order - b.order)
      .map((p) => <PersonCard key={p.name} person={p} />);

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
      <TextContainer className="container lg:w-4/6 mx-auto bg-white relative rounded-md px-12">
        <div className="py-8 bg-white">
          <Heading size="lg">{data?.page.title}</Heading>
          {documentToReactComponents(data?.page.content)}
        </div>
      </TextContainer>
      <CityImageSection
        title={data?.page.officesTitle}
        cities={data?.city ?? []}
        onClickHandler={() => console.log('click')}
      />
      <div className="container lg:w-4/6 mx-auto px-12 pb-12">
        <Heading size="md">{data?.page.allTeamMembersTitle}</Heading>
      </div>
      <div className="container lg:w-5/6 mx-auto px-12 pb-12 flex flex-row flex-wrap justify-evenly">
        {renderPeople()}
      </div>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: -50px;
`;

export default AboutUs;
