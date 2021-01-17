import { City } from './City';

export type Page = {
  title: string;
  hero: {
    sys: {
      id: string;
    };
  };
  content: any;
  officesTitle: string;
  offices: City[];
  allTeamMembersTitle: string;
};
