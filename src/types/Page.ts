import { City } from './City';

export type Page = {
  title: string;
  hero: {
    sys: {
      id: string;
    };
  };
  content: string;
  officesTitle: string;
  offices: City[];
  allTeamMembersTitle: string;
};
