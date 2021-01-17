export type Person = {
  name: string;
  title: string;
  office: 'London' | 'Berlin';
  mugshot: { sys: { id: string } };
  biography: any;
  order: number;
};
