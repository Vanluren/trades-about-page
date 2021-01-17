import { Person, City, Page } from 'types';
export const normalizeEntries = (entries: any) => {
  let people: Person[] = [];
  let page: Page[] = [];
  let city: City[] = [];

  entries.items.forEach((e: any) => {
    if (e.fields.biography) {
      people.push(e.fields);
    } else if (e.fields.officeTeamMembersTitle) {
      city.push(e.fields);
    } else if (e.fields.title) {
      page.push(e.fields);
    }
  });

  return {
    people,
    page,
    city,
  };
};
