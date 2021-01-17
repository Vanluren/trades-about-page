import React, { ReactElement, useContext, useCallback } from 'react';
import { DataContext } from 'providers/data';
import Heading from 'components/atoms/Heading';
import PersonCard from 'components/molecules/PersonCard';

type Props = {
  activeCity: string | null;
};
const PersonCardGallery = ({ activeCity }: Props): ReactElement => {
  const { data } = useContext(DataContext);

  const renderTitle = useCallback(() => {
    if (activeCity) {
      console.log(data?.city.find((c) => c.id === activeCity));
      return data?.city.find((c) => c.id === activeCity)
        ?.officeTeamMembersTitle;
    }
    return data?.page.allTeamMembersTitle;
  }, [activeCity, data]);

  const renderPeople = useCallback(() => {
    let p = data?.people;
    if (activeCity) {
      p = data?.people.filter((p) => p.office.sys.id === activeCity);
    }
    return p
      ?.sort((a, b) => a.order - b.order)
      .map((p) => <PersonCard key={p.name} person={p} />);
  }, [activeCity, data]);

  return (
    <>
      <div className="container lg:w-4/6 mx-auto px-12 pb-12">
        <Heading size="md">{renderTitle()}</Heading>
      </div>
      <div className="container lg:w-5/6 mx-auto px-12 pb-12 flex flex-row flex-wrap justify-evenly">
        {renderPeople()}
      </div>
    </>
  );
};

export default PersonCardGallery;
