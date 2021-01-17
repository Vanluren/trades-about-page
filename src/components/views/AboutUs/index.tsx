import React, { useContext } from 'react';
import styled from 'styled-components';
import HeroImage from 'components/atoms/HeroImage';
import { DataContext } from 'providers/data';
import LoadingSpinner from 'components/atoms/LoadingSpinner';
import ErrorMessage from 'components/molecules/ErrorMessage';

const AboutUs = () => {
  const { data, error, isLoading } = useContext(DataContext);

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
      <HeroImage imageSrc="https://placekitten.com/200/300" />
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
      <div className="container w-5/6 mx-auto bg-white relative rounded-sm px-12 pb-12">
        <div className="w-full flex flex-row justify-around items-center ">
          <div className="rounded-md relative">
            <img
              src="https://placekitten.com/500/300"
              alt=""
              className="object-cover rounded-md"
              lazy-load="true"
            />
            <div className="absolute w-full h-full bg-opacity-50 bg-gray-600 top-0 right-0 left-0 bottom-0 flex items-end p-10 hover:py-12 transition-transform duration-500 rounded-md">
              <h2 className="text-white text-2xl text-semibold">Berlin</h2>
            </div>
          </div>
          <div className="rounded-md relative">
            <img
              src="https://placekitten.com/500/300"
              alt=""
              className="object-cover rounded-md"
              lazy-load="true"
            />
            <div className="absolute w-full h-full bg-opacity-50 bg-gray-600 top-0 right-0 left-0 bottom-0 flex items-end p-10 hover:py-12 transition-transform duration-500 rounded-md">
              <h2 className="text-white text-2xl text-semibold">London</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-5/6 mx-auto  px-12 pb-12 flex flex-row justify-evenly">
        <div className="w-3/6 bg-gray-100 flex flex-col px-4 py-6">
          <div className="flex flex-row pb-6">
            <img
              src="https://placekitten.com/500/500"
              alt="name"
              className="w-24 h-24 object-fill rounded-full"
            />
            <div className="flex flex-col pl-6">
              <h3 className="text-2xl">Villads Nielsen</h3>
              <p className="text-xl text-gray-500">VP of something</p>
            </div>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            temporibus, consequuntur ex tenetur nobis, consequatur eligendi amet
            minus libero consectetur cumque voluptatibus at, totam architecto
            quibusdam nihil numquam sint cum.
            <a href="#" className="text-blue-500 capitalize pl-2">
              Show more
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

const TextContainer = styled.div`
  margin-top: -50px;
`;

export default AboutUs;
