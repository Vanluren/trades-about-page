import React, { useMemo, useState } from 'react';
import { Person } from 'types';
import Mugshot from 'components/atoms/Mugshot';
import styled from 'styled-components';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { truncateString } from 'utils/truncateString';

type Props = {
  person: Person;
};

const PersonCard = ({ person }: Props) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const bio = useMemo(() => {
    if (showAll) return documentToHtmlString(person.biography);

    return truncateString(documentToHtmlString(person.biography), 250);
  }, [person, showAll]);

  return (
    <Wrapper className=" bg-gray-100 flex flex-col px-4 py-6 mb-4 ">
      <div className="flex flex-row pb-6">
        <Mugshot imageId={person.mugshot.sys.id} />
        <div className="flex flex-col pl-6">
          <h3 className="text-2xl">{person.name}</h3>
          <p className="text-xl text-gray-500">{person.title}</p>
        </div>
      </div>
      <p className="text-base" dangerouslySetInnerHTML={{ __html: bio }}></p>
      <div
        role="button"
        className="text-indigo-500"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
`;

export default PersonCard;
