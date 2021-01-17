import { Person, City, Page } from 'types';
export const normalizeEntries = (entries: any) => {
  const assets = entries?.includes
    ? normalizeAssets(entries.includes['Asset'])
    : [];
  let people: Person[] = [];
  let page: Page | null = null;
  let city: City[] = [];

  entries.items.forEach((e: any) => {
    if (e.fields.biography) {
      people.push(e.fields);
    } else if (e.fields.officeTeamMembersTitle) {
      city.push(e.fields);
    } else if (e.fields.title) {
      page = e.fields;
    }
  });
  return {
    assets,
    people,
    page,
    city,
  };
};

const normalizeAssets = (assets: any) => {
  const obj = {};
  //@ts-ignore
  assets.forEach((a: any, idx: number) => (obj[a.sys.id] = a.fields));
  return obj;
};
