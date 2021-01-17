import React from 'react';
import { Person } from 'types';
import Mugshot from 'components/atoms/Mugshot';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
  person: Person;
};

const PersonCard = ({ person }: Props) => {
  return (
    <Wrapper className=" bg-gray-100 flex flex-col px-4 py-6 mb-4 ">
      <div className="flex flex-row pb-6">
        <Mugshot imageId={person.mugshot.sys.id} />
        <div className="flex flex-col pl-6">
          <h3 className="text-2xl">{person.name}</h3>
          <p className="text-xl text-gray-500">{person.title}</p>
        </div>
      </div>
      <p className="text-base">
        {documentToReactComponents(person.biography)}
        <a href="/" className="text-blue-500 capitalize pl-2">
          Show more
        </a>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
`;

export default PersonCard;
